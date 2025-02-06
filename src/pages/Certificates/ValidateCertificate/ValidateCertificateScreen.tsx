import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShieldCheckIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import logoImg from '@/assets/logo.jpg';
import CertificatePreview from '../../../Components/Certificates/CertificatePreview';

export default function ValidateCertificateScreen() {
  const [searchParams] = useSearchParams();
  const [cpf, setCpf] = useState('');
  const [certificateCode, setCertificateCode] = useState(searchParams.get('code') || '');
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsValidating(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setValidationResult('success');
    } catch (error) {
      setValidationResult('error');
    } finally {
      setIsValidating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header com Logo */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Logo" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">OK! Educa</h1>
              <p className="text-sm text-gray-500">Sistema de Validação de Certificados</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Coluna do Formulário */}
          <div>
            {/* Card Principal */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Cabeçalho do Card */}
              <div className="bg-purple-600 px-6 py-8 text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Validação de Certificado
                </h2>
                <p className="text-purple-100">
                  Verifique a autenticidade do seu certificado
                </p>
              </div>

              {/* Formulário */}
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-1">
                    <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
                      CPF do Aluno
                    </label>
                    <input
                      type="text"
                      id="cpf"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                      placeholder="000.000.000-00"
                      className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                      Código do Certificado
                    </label>
                    <input
                      type="text"
                      id="code"
                      value={certificateCode}
                      onChange={(e) => setCertificateCode(e.target.value)}
                      placeholder="CERT-XXX-XXXXX"
                      className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-colors"
                      required
                    />
                    <p className="mt-2 text-xs text-gray-500">
                      O código pode ser encontrado no seu certificado
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isValidating}
                      className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isValidating ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          <span>Validando...</span>
                        </>
                      ) : (
                        <>
                          <ShieldCheckIcon className="w-5 h-5" />
                          <span>Validar Certificado</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Resultado da Validação */}
                {validationResult && (
                  <div className={`mt-8 p-4 rounded-lg ${
                    validationResult === 'success' 
                      ? 'bg-green-50 border-2 border-green-200' 
                      : 'bg-red-50 border-2 border-red-200'
                  }`}>
                    {validationResult === 'success' ? (
                      <div className="text-center">
                        <CheckBadgeIcon className="w-12 h-12 text-green-600 mx-auto mb-3" />
                        <h3 className="text-lg font-semibold text-green-800 mb-1">
                          Certificado Válido!
                        </h3>
                        <p className="text-sm text-green-700">
                          Este certificado foi emitido pela OK! Educa e é autêntico.
                        </p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <ShieldCheckIcon className="w-12 h-12 text-red-600 mx-auto mb-3" />
                        <h3 className="text-lg font-semibold text-red-800 mb-1">
                          Certificado Inválido
                        </h3>
                        <p className="text-sm text-red-700">
                          Não foi possível validar este certificado. Verifique os dados informados.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Footer do formulário */}
            <p className="text-center text-sm text-gray-500 mt-8">
              Em caso de dúvidas, entre em contato com nosso suporte através do email{' '}
              <a href="mailto:suporte@okeduca.com.br" className="text-purple-600 hover:text-purple-700">
                suporte@okeduca.com.br
              </a>
            </p>
          </div>

          {/* Coluna do Certificado */}
          {validationResult === 'success' && (
            <CertificatePreview 
              studentName="Luciano Gomes"
              courseName="Marketing Digital"
              courseHours="40 horas"
              certificateCode={certificateCode}
              completedAt="15 de Janeiro de 2024"
              finalGrade="9.5"
            />
          )}
        </div>
      </div>
    </div>
  );
} 