PDF Summary API
This project implements an API for summarizing PDF files using Node.js, Express.js, Multer for file uploads, and OpenAI API for text summarization. It allows users to upload a PDF file, extract text from it, and generate a summary using OpenAI's GPT-3.5 model.

Features
File Upload: Upload a PDF file for summarization.
Text Extraction: Extract text content from uploaded PDF files.
Summarization: Utilize OpenAI's GPT-3.5 model to generate summaries of extracted text.
Error Handling: Handle errors gracefully with descriptive error messages.
Installation
Clone the repository:

bash
git clone https://github.com/your-username/pdf-summary-api.git
cd pdf-summary-api
Install dependencies:

bash
npm install
Set up environment variables:

Create a .env file in the root directory and add your OpenAI API key:

makefile
API_KEY=your_openai_api_key
Usage
Start the server:

bash
Копіювати код
npm start
Upload a PDF file:

Send a POST request to /api/upload with the PDF file attached as file.

Example using curl:

bash
Копіювати код
curl -X POST -F "file=@path/to/your/file.pdf" http://localhost:5500/api/upload
Response:

Upon successful upload and processing, the API will respond with a JSON object containing the summarized text.

Dependencies
Express.js: Web framework for handling HTTP requests.
Multer: Middleware for handling file uploads.
OpenAI API: Integration for text summarization using GPT-3.5.
pdf-parse: Library for extracting text from PDF files.
