# import os
# from dotenv import load_dotenv
# from langchain_community.document_loaders import TextLoader
# from langchain.text_splitter import CharacterTextSplitter
# from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
# from langchain_community.vectorstores import FAISS
# from langchain.chains.question_answering import load_qa_chain

# load_dotenv()

# # API Key
# api_key_google = os.getenv('GOOGLE_API_KEY')

# # Step 1: Load documents
# def read_doc(file_path):
#     file_loader = TextLoader(file_path)
#     documents = file_loader.load()
#     return documents

# doc = read_doc('documents/Tata steel Info.txt')

# # Step 2: Split documents
# def chunk_data(docs, chunk_size=10000, chunk_overlap=20):
#     text_splitter = CharacterTextSplitter(chunk_size=chunk_size, chunk_overlap=chunk_overlap)
#     docs = text_splitter.split_documents(docs)
#     return docs

# documents = chunk_data(doc)

# # Step 3: Embeddings
# embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001", google_api_key=api_key_google)

# # Step 4: Store vectors locally with FAISS
# vectorstore = FAISS.from_documents(documents, embeddings)

# # Step 5: Save FAISS index to local folder
# vectorstore.save_local("faiss_index")

# # Step 6: Load FAISS index (whenever needed)
# vectorstore = FAISS.load_local("faiss_index", embeddings, allow_dangerous_deserialization=True)

# # Step 7: Retrieval function
# def retrieve_query(query, k=2):
#     matching_results = vectorstore.similarity_search(query, k=k)
#     return matching_results

# # Step 8: Initialize Gemini LLM
# llm = ChatGoogleGenerativeAI(model="models/gemini-1.5-flash", google_api_key=api_key_google, temperature=0.5)
# chain = load_qa_chain(llm, chain_type="stuff")

# # Step 9: QA function
# def answer_query(query):
#     matching_results = retrieve_query(query)
#     # answer = chain.run(input_documents=matching_results, question=query)
#     answer = chain.invoke({"input_documents": matching_results, "question": query})
#     return answer

# # Run query
# our_query = "Tata Steel mission"
# answer = answer_query(our_query)
# print(answer)


# # import os
# # from dotenv import load_dotenv

# # # LangChain imports
# # from langchain_community.document_loaders import TextLoader
# # from langchain.text_splitter import CharacterTextSplitter
# # from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
# # from langchain_community.vectorstores import FAISS
# # from langchain.prompts import ChatPromptTemplate

# # # New chain API
# # from langchain.chains.combine_documents import create_stuff_documents_chain
# # from langchain.chains import create_retrieval_chain

# # # -----------------------------
# # # 1. Load environment variables
# # # -----------------------------
# # load_dotenv()
# # api_key_google = os.getenv("GOOGLE_API_KEY")

# # # -----------------------------
# # # 2. Load & chunk documents
# # # -----------------------------
# # def read_and_chunk(file_path, chunk_size=1000, chunk_overlap=100):
# #     loader = TextLoader(file_path)
# #     docs = loader.load()
# #     splitter = CharacterTextSplitter(chunk_size=chunk_size, chunk_overlap=chunk_overlap)
# #     return splitter.split_documents(docs)

# # documents = read_and_chunk("documents/Tata steel Info.txt")

# # # -----------------------------
# # # 3. Initialize embeddings + FAISS
# # # -----------------------------
# # embeddings = GoogleGenerativeAIEmbeddings(
# #     model="models/embedding-001",
# #     google_api_key=api_key_google
# # )

# # # Create FAISS index locally (vectors are saved in RAM here)
# # vectorstore = FAISS.from_documents(documents, embeddings)

# # # -----------------------------
# # # 4. Initialize Gemini LLM
# # # -----------------------------
# # llm = ChatGoogleGenerativeAI(
# #     model="gemini-pro",
# #     google_api_key=api_key_google,
# #     temperature=0.5
# # )

# # # -----------------------------
# # # 5. Create Retrieval Chain
# # # -----------------------------
# # prompt = ChatPromptTemplate.from_messages([
# #     ("system", "You are a helpful assistant. Use the provided context to answer the question."),
# #     ("user", "Context:\n{context}\n\nQuestion: {input}")
# # ])
# # # Step 1: Document chain (how docs are combined before LLM)
# # doc_chain = create_stuff_documents_chain(llm,prompt=prompt)

# # # Step 2: Retriever from FAISS
# # retriever = vectorstore.as_retriever(search_kwargs={"k": 2})

# # # Step 3: RAG pipeline
# # rag_chain = create_retrieval_chain(retriever, doc_chain)

# # # -----------------------------
# # # 6. Ask a Question
# # # -----------------------------
# # query = "What is Tata Steel?"
# # result = rag_chain.invoke({"input": query})

# # print("\n📌 Question:", query)
# # print("🤖 Answer:", result["answer"])


# # app.py
import os
import logging
from contextlib import asynccontextmanager
from typing import Optional, Dict, Any, List

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

# LangChain (v0.2+ modular)
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_community.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from fastapi.middleware.cors import CORSMiddleware
# from langchain_community.embeddings import HuggingFaceEmbeddings

# -------------------------
# Config / Logging
# -------------------------
load_dotenv()
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Environment / defaults
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    raise RuntimeError("Missing GOOGLE_API_KEY in .env or environment")

DOC_PATH = os.getenv("DOC_PATH", "documents/Tata steel Info.txt")
FAISS_DIR = os.getenv("FAISS_DIR", "faiss_index")
EMBED_MODEL = os.getenv("EMBED_MODEL", "models/embedding-001")
CHAT_MODEL = os.getenv("CHAT_MODEL", "models/gemini-1.5-flash")  # flash recommended to reduce quota usage
CHUNK_SIZE = int(os.getenv("CHUNK_SIZE", "1500"))
CHUNK_OVERLAP = int(os.getenv("CHUNK_OVERLAP", "150"))
DEFAULT_K = int(os.getenv("DEFAULT_K", "3"))

# Globals assigned at startup
vectorstore: Optional[FAISS] = None
retriever = None
rag_chain = None

# -------------------------
# Request / Response models
# -------------------------
class AskRequest(BaseModel):
    query: str
    k: Optional[int] = None  # override top-k retrieval

class RebuildRequest(BaseModel):
    doc_path: Optional[str] = None  # optional new doc path to rebuild from

# -------------------------
# LangChain helpers
# -------------------------
def get_embeddings() -> GoogleGenerativeAIEmbeddings:
    """Return an embeddings object (Google Gemini embedding)."""
    return GoogleGenerativeAIEmbeddings(model=EMBED_MODEL, google_api_key=GOOGLE_API_KEY)
    # return HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")  



def get_llm() -> ChatGoogleGenerativeAI:
    """Return a chat LLM object (Gemini)."""
    return ChatGoogleGenerativeAI(model=CHAT_MODEL, google_api_key=GOOGLE_API_KEY, temperature=0.2)


def load_and_chunk_documents(path: str) -> List:
    """Load a text document and chunk it into LangChain Document objects."""
    if not os.path.exists(path):
        raise FileNotFoundError(f"Document not found at {path}")
    loader = TextLoader(path)
    docs = loader.load()
    splitter = CharacterTextSplitter(chunk_size=CHUNK_SIZE, chunk_overlap=CHUNK_OVERLAP)
    chunks = splitter.split_documents(docs)
    logger.info("Loaded and chunked %d documents into %d chunks", len(docs), len(chunks))
    return chunks


def build_or_load_faiss(doc_path: str = DOC_PATH, faiss_dir: str = FAISS_DIR) -> FAISS:
    """
    If FAISS directory exists, load it. Otherwise, build from doc_path and save to faiss_dir.
    """
    embeddings = get_embeddings()

    # load existing
    if os.path.isdir(faiss_dir) and os.path.exists(os.path.join(faiss_dir, "faiss_index")) or os.path.isdir(faiss_dir):
        try:
            logger.info("Loading FAISS from %s", faiss_dir)
            vs = FAISS.load_local(faiss_dir, embeddings, allow_dangerous_deserialization=True)
            logger.info("Loaded FAISS with local vectors")
            return vs
        except Exception as e:
            logger.warning("Failed to load existing FAISS index: %s — will rebuild. Error: %s", faiss_dir, e)

    # build
    logger.info("Building FAISS index from %s", doc_path)
    chunks = load_and_chunk_documents(doc_path)
    vs = FAISS.from_documents(chunks, embeddings)
    vs.save_local(faiss_dir)
    logger.info("Saved FAISS locally at %s", faiss_dir)
    return vs


# def build_rag_chain(vs: FAISS):
#     """
#     Build a Runnable pipeline: retriever -> prompt -> llm
#     Returns a callable pipeline (rag_chain) that can be invoked with a string query.
#     """
#     llm = get_llm()
#     prompt = ChatPromptTemplate.from_template(
#         "You are a helpful assistant. Use the context to answer the question concisely.\n\n"
#         "Context:\n{context}\n\n"
#         "Question: {question}\n\n"
#         "Answer:"
#     )

#     retr = vs.as_retriever(search_kwargs={"k": DEFAULT_K})
#     # Runnable pipeline:
#     chain = ({"context": retr, "question": RunnablePassthrough()} | prompt | llm)
#     return chain

def build_rag_chain(vs: FAISS):
    llm = get_llm()
    prompt = ChatPromptTemplate.from_template(
        "You are a helpful assistant. Use the context to answer the question concisely.\n\n"
        "Context:\n{context}\n\n"
        "Question: {question}\n\n"
        "Answer:"
    )

    retr = vs.as_retriever(search_kwargs={"k": DEFAULT_K})
    chain = ({"context": retr, "question": RunnablePassthrough()} | prompt | llm)
    return chain


# -------------------------
# FastAPI lifespan
# -------------------------
@asynccontextmanager
async def lifespan(app: FastAPI):
    global vectorstore, retriever, rag_chain
    logger.info("Startup: building/loading FAISS and RAG chain")
    try:
        vectorstore = build_or_load_faiss()
        retriever = vectorstore.as_retriever(search_kwargs={"k": DEFAULT_K})
        rag_chain = build_rag_chain(vectorstore)
        logger.info("RAG pipeline ready")
    except Exception as e:
        logger.exception("Failed to initialize vectorstore/chain: %s", e)
        raise

    yield

    # Shutdown cleanup (if any)
    logger.info("Shutdown: cleaning resources (none to close explicitly)")

# -------------------------
# FastAPI app & endpoints
# -------------------------
app = FastAPI(title="RAG Chatbot (Runnable) with FAISS", version="1.0", lifespan=lifespan)


# Allow frontend (React) to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change "*" to your frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root() -> Dict[str, Any]:
    return {
        "message": "RAG Chatbot API (Runnable). Use POST /ask to query or POST /rebuild to rebuild the index.",
        "docs": "/docs",
    }


# @app.post("/ask")
# async def ask(req: AskRequest):
#     if not req.query or not req.query.strip():
#         raise HTTPException(status_code=400, detail="query cannot be empty")

#     try:
#         k = req.k if req.k and req.k > 0 else DEFAULT_K
#         # Use retriever's similarity search to pass best-k context to LLM
#         hits = vectorstore.similarity_search(req.query, k=k)

#         # Build context text by concatenating top hit contents (runnable pipeline expects a retriever, but we pass text context)
#         context = "\n\n".join(h.page_content for h in hits)

#         # Use the prompt -> llm pipeline directly by providing a dict matching the prompt variables:
#         # the pipeline we built expects {context, question} where question is passed through RunnablePassthrough
#         # We can call rag_chain.invoke with a mapping; for simplicity call with a dict that matches named inputs:
#         result = rag_chain.invoke({"context": context, "question": req.query})

#         # ChatGoogleGenerativeAI returns a message object or a string; handle both:
#         answer_text = None
#         if hasattr(result, "content"):
#             answer_text = result.content
#         elif isinstance(result, dict) and "content" in result:
#             answer_text = result["content"]
#         else:
#             answer_text = str(result)

#         return {"query": req.query, "k": k, "answer": answer_text, "sources_count": len(hits)}
#     except Exception as e:
#         logger.exception("Error handling /ask: %s", e)
#         raise HTTPException(status_code=500, detail=f"Error answering query: {e}")


# @app.post("/ask")
# async def ask(req: AskRequest):
#     if not req.query.strip():
#         raise HTTPException(status_code=400, detail="query cannot be empty")

#     try:
#         result = rag_chain.invoke(req.query)   # just pass the query!
        
#         if hasattr(result, "content"):
#             answer_text = result.content
#         elif isinstance(result, dict) and "content" in result:
#             answer_text = result["content"]
#         else:
#             answer_text = str(result)

#         return {"query": req.query, "answer": answer_text}
#     except Exception as e:
#         logger.exception("Error handling /ask: %s", e)
#         raise HTTPException(status_code=500, detail=f"Error answering query: {e}")


@app.post("/ask")
async def ask(req: AskRequest):
    if not req.query.strip():
        raise HTTPException(status_code=400, detail="Query cannot be empty")

    try:
        # Pass dict because chain was defined with {"context", "question"}
        # result = rag_chain.invoke({
        #     "context": req.query, 
        #     "question": req.query
        # })
        result = rag_chain.invoke(req.query)   # only string, not dict

        # Handle output flexibly (LLM result can be string, dict, or has .content)
        if hasattr(result, "content"):
            answer_text = result.content
        elif isinstance(result, dict) and "content" in result:
            answer_text = result["content"]
        else:
            answer_text = str(result)

        return {"query": req.query, "answer": answer_text}

    except Exception as e:
        logger.exception("Error handling /ask: %s", e)
        raise HTTPException(status_code=500, detail=f"Error answering query: {e}")


@app.post("/rebuild")
async def rebuild(req: RebuildRequest):
    """
    Rebuild FAISS index from a new document path (or existing DOC_PATH if not provided).
    Use this when you want to update the index.
    """
    global vectorstore, retriever, rag_chain, DOC_PATH

    try:
        if req.doc_path:
            DOC_PATH = req.doc_path

        # Rebuild and overwrite existing FAISS_DIR
        vectorstore = build_or_load_faiss(doc_path=DOC_PATH, faiss_dir=FAISS_DIR)
        retriever = vectorstore.as_retriever(search_kwargs={"k": DEFAULT_K})
        rag_chain = build_rag_chain(vectorstore)
        return {"status": "ok", "message": f"Rebuilt FAISS from {DOC_PATH}", "faiss_dir": FAISS_DIR}
    except Exception as e:
        logger.exception("Rebuild failed: %s", e)
        raise HTTPException(status_code=500, detail=f"Rebuild failed: {e}")


@app.get("/health")
async def health():
    return {"status": "ok"}


# -------------------------
# Run server (optional when using uvicorn externally)
# -------------------------
if __name__ == "__main__":
    import uvicorn
    
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)



# import os
# import faiss
# import pickle
# from fastapi import FastAPI, HTTPException
# from pydantic import BaseModel

# # LangChain imports
# from langchain_community.document_loaders import TextLoader
# from langchain.text_splitter import CharacterTextSplitter
# from langchain_community.vectorstores import FAISS
# from langchain_community.embeddings import HuggingFaceEmbeddings
# from langchain.chains import RetrievalQA
# from langchain.llms import HuggingFaceHub

# # -----------------------------
# # 1. Setup Embeddings
# # -----------------------------
# embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

# # -----------------------------
# # 2. Load or Create FAISS Index
# # -----------------------------
# INDEX_PATH = "faiss_index"

# if os.path.exists(INDEX_PATH):
#     print("🔹 Loading existing FAISS index...")
#     vectorstore = FAISS.load_local(INDEX_PATH, embeddings, allow_dangerous_deserialization=True)
# else:
#     print("🔹 Creating new FAISS index...")
#     loader = TextLoader("data.txt", encoding="utf-8")   # put your knowledge base file here
#     documents = loader.load()

#     text_splitter = CharacterTextSplitter(chunk_size=500, chunk_overlap=50)
#     docs = text_splitter.split_documents(documents)

#     vectorstore = FAISS.from_documents(docs, embeddings)
#     vectorstore.save_local(INDEX_PATH)

# # -----------------------------
# # 3. Setup LLM (HuggingFaceHub free models)
# # -----------------------------
# llm = HuggingFaceHub(
#     repo_id="google/flan-t5-base", 
#     model_kwargs={"temperature":0.3, "max_length":512}
# )

# qa_chain = RetrievalQA.from_chain_type(
#     llm=llm,
#     retriever=vectorstore.as_retriever(),
#     chain_type="stuff"
# )

# # -----------------------------
# # 4. FastAPI Setup
# # -----------------------------
# app = FastAPI(title="RAG Chatbot API", version="1.0")

# class QueryRequest(BaseModel):
#     query: str

# @app.post("/ask")
# async def ask_question(request: QueryRequest):
#     try:
#         response = qa_chain.run(request.query)
#         return {"query": request.query, "answer": response}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Error answering query: {e}")

# @app.get("/")
# async def root():
#     return {"message": "Welcome to RAG Chatbot API. Use POST /ask to query."}
