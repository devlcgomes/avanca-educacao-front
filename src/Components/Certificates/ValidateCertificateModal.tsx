import { XMarkIcon } from '@heroicons/react/24/outline';

type ValidateCertificateModalProps = {
  isOpen: boolean;
  onClose: () => void;
  certificateData: {
    id: string;
    studentName: string;
    courseName: string;
    completedAt: string;
    duration: string;
  };
};

export default function ValidateCertificateModal({ 
  isOpen, 
  onClose,
  certificateData 
}: ValidateCertificateModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-lg mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            Validação de Certificado
          </h3>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <XMarkIcon className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-2 text-green-700 font-medium mb-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Certificado Válido
            </div>
            <p className="text-sm text-green-600">
              Este certificado foi emitido pela OK! Educa e é válido.
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-500">ID do Certificado</label>
              <p className="text-sm font-medium">{certificateData.id}</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Aluno</label>
              <p className="text-sm font-medium">{certificateData.studentName}</p>
            </div>

            <div>
              <label className="text-xs text-gray-500">Curso</label>
              <p className="text-sm font-medium">{certificateData.courseName}</p>
            </div>

            <div className="flex gap-4">
              <div>
                <label className="text-xs text-gray-500">Data de Conclusão</label>
                <p className="text-sm font-medium">{certificateData.completedAt}</p>
              </div>
              <div>
                <label className="text-xs text-gray-500">Carga Horária</label>
                <p className="text-sm font-medium">{certificateData.duration}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 p-4 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
} 