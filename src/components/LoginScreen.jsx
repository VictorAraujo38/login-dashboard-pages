import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import loginIllustration from "../assets/images/loginIllustration.png";
import logo from "../assets/images/logo.png";

const LoginScreen = () => {
  const [email, setEmail] = useState("admin@exemplo.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSubmit = () => {
    setError("");

    if (!email || !password) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    const success = login(email, password);
    if (!success) {
      setError("Email ou senha incorretos");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: '#F9FBFF' }}>
      <div className="bg-white flex rounded-[20px] overflow-hidden" style={{ 
        width: '756.5px', 
        height: '498px',
        boxShadow: '0px 100px 200px rgba(0, 0, 0, 0.25)'
      }}>
        {/* Lado esquerdo - Formulário */}
        <div className="flex flex-col items-start p-[40px_20px] gap-[20px] w-[339px] h-[478px]">
          <div className="flex flex-col justify-center items-start p-[0px_0px_49px] gap-[35px] w-[299px] h-[388px]">
            <img src={logo} alt="logo" className="h-12 w-auto" />

            {/* Título */}
            <div className="w-[299px] h-[35px]">
              <h1 style={{
                fontFamily: 'sans-serif',
                fontWeight: 700,
                fontSize: '26px',
                lineHeight: '15px',
                color: '#CC6237'
              }}>
                Bem-vindo de volta
              </h1>
              <p style={{
                fontFamily: 'sans-serif',
                fontSize: '14px',
                color: '#657593',
                marginTop: '8px'
              }}>
                Entre com sua conta para acessar o painel.
              </p>
            </div>

            {/* Formulário */}
            <div className="flex flex-col items-start gap-[20px] w-[299px] h-[200px]">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Input E-mail */}
              <div className="flex flex-col items-start gap-[5px] w-[299px] h-[60px]">
                <label style={{
                  fontFamily: 'sans-serif',
                  fontWeight: 600,
                  fontSize: '13px',
                  lineHeight: '15px',
                  color: '#CC6237'
                }}>
                  E-mail
                </label>
                <div className="flex flex-row items-center p-[10px_20px] w-[299px] h-[40px] rounded-[100px]" style={{ background: '#F6F6F6' }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-none outline-none"
                    placeholder="seunome@seuservidor.com"
                    style={{
                      fontFamily: 'sans-serif',
                      fontSize: '12px',
                      lineHeight: '15px',
                      color: '#657593'
                    }}
                  />
                </div>
              </div>

              {/* Input Senha */}
              <div className="flex flex-col items-end gap-[5px] w-[299px] h-[60px]">
                <label className="self-stretch" style={{
                  fontFamily: 'sans-serif',
                  fontWeight: 600,
                  fontSize: '13px',
                  lineHeight: '15px',
                  color: '#CC6237'
                }}>
                  Senha
                </label>
                <div className="flex flex-row justify-between items-center p-[10px_20px] gap-[10px] w-[299px] h-[40px] rounded-[100px]" style={{ background: '#F6F6F6' }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none"
                    placeholder="Digite aqui"
                    style={{
                      fontFamily: 'sans-serif',
                      fontSize: '12px',
                      lineHeight: '15px',
                      color: '#657593'
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="w-[26px] h-[26px] flex items-center justify-center"
                    style={{ color: '#CC6237' }}
                  >
                    {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                  </button>
                </div>
              </div>

              {/* Botão */}
              <div className="flex flex-col items-start gap-[5px] w-[299px] h-[40px]">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex flex-row justify-center items-center p-[10px_25px] gap-[10px] w-[299px] h-[40px] rounded-[100px]"
                  style={{ 
                    background: '#CC6237',
                    fontFamily: ' sans-serif',
                    fontWeight: 500,
                    fontSize: '13px',
                    lineHeight: '15px',
                    color: '#FFFFFF'
                  }}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center text-sm" style={{ color: '#657593', fontFamily: 'sans-serif' }}>
            Use: admin@exemplo.com / 123456
          </div>
        </div>

        <div className="relative w-[397.5px] h-[478px]">
          <div 
            className="absolute rounded-[20px]"
            style={{
              width: '355.5px',
              height: '478px',
              left: '42px',
              top: '12px',
              background: '#CC6237' 
            }}
          />
          
          <div 
            className="absolute"
            style={{
              width: '357px',
              height: '316px',
              top: '190px',
              left: '-16px',
            }}
          >
            <img 
              src={loginIllustration} 
              alt="Ilustração de pessoa gerenciando eventos" 
              className="w-full h-full object-contain" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;