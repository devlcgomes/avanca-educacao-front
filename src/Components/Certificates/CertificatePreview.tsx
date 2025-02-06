import whiteLabelConfig from '../../config/whiteLabel';

type CertificatePreviewProps = {
  studentName: string;
  courseName: string;
  courseHours: string;
  certificateCode: string;
  completedAt: string;
  finalGrade: string;
};

export default function CertificatePreview({
  studentName,
  courseName,
  courseHours,
  certificateCode,
  completedAt,
  finalGrade
}: CertificatePreviewProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-green-600 px-6 py-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">
            Certificado Validado
          </h3>
          <p className="text-green-100 text-sm">
            Emitido em {completedAt}
          </p>
        </div>
        <button 
          className="bg-white text-green-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-50 transition-colors flex items-center gap-2"
          onClick={() => window.print()}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Baixar PDF
        </button>
      </div>

      <div className="p-6">
        {/* Preview do Certificado */}
        <div className="aspect-video bg-white border-2 border-gray-200 rounded-lg p-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white opacity-50" />
          <div className="relative flex flex-col justify-between h-full">
            {/* Cabeçalho do Certificado */}
            <div className="text-center">
              <img 
                src={whiteLabelConfig.logoUrl} 
                alt={whiteLabelConfig.companyName} 
                className="h-16 mx-auto mb-4 company-logo"
              />
              <h1 className="text-2xl font-serif text-gray-900 mb-2">Certificado de Conclusão</h1>
              <div className="w-24 h-1 bg-purple-600 mx-auto" />
            </div>

            {/* Conteúdo do Certificado */}
            <div className="text-center space-y-4">
              <p className="text-gray-700">
                Certificamos que
              </p>
              <p className="text-2xl font-serif text-gray-900">
                {studentName}
              </p>
              <p className="text-gray-700">
                concluiu com êxito o curso de
              </p>
              <p className="text-xl font-serif text-purple-600">
                {courseName}
              </p>
              <p className="text-gray-700">
                com carga horária de {courseHours}
              </p>
            </div>

            {/* Rodapé do Certificado */}
            <div className="text-center border-t border-gray-200 pt-4 mt-4">
              <p className="text-sm text-gray-600">
                Código de Autenticação: {certificateCode}
              </p>
            </div>

            {whiteLabelConfig.certificateSignature && (
              <div className="signature-section">
                <img 
                  src={whiteLabelConfig.certificateSignature.imageUrl} 
                  alt="Assinatura" 
                />
                <p>{whiteLabelConfig.certificateSignature.name}</p>
                <span>{whiteLabelConfig.certificateSignature.role}</span>
              </div>
            )}
          </div>
        </div>

        {/* Informações Adicionais */}
        <div className="mt-6 space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-700">Informações do Curso</h4>
            <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Curso:</span>
                <p className="font-medium">{courseName}</p>
              </div>
              <div>
                <span className="text-gray-500">Carga Horária:</span>
                <p className="font-medium">{courseHours}</p>
              </div>
              <div>
                <span className="text-gray-500">Data de Conclusão:</span>
                <p className="font-medium">{completedAt}</p>
              </div>
              <div>
                <span className="text-gray-500">Nota Final:</span>
                <p className="font-medium">{finalGrade}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 