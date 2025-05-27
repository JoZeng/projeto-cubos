// Onde você configura sua instância do Axios
import axios from "axios";

// Defina a base URL da API
// Para desenvolvimento local: 'http://localhost:3000/' (ou a porta que seu backend usa)
// Para Vercel: '/api/' (que será roteado pelo Vercel para sua Serverless Function)
// Ou se o backend estivesse separado: 'https://api.seubackend.com'

// A Vercel automaticamente expõe a variável de ambiente process.env.NODE_ENV
// para 'development' em vercel dev e 'production' em deploys.
// Para Vercel Dev, suas funções ainda são acessíveis via '/api/'.
// Para o deploy no Vercel, o domínio base já é o seu próprio, então '/api/' é o suficiente.
const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "/api/" // Em produção no Vercel, o frontend e backend estão no mesmo domínio, então o prefixo /api/ funciona
    : "http://localhost:3000/"; // Em desenvolvimento local, aponte para o seu backend local

export default axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
