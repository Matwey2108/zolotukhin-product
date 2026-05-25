import { motion } from 'motion/react';
import { Mail, Phone, Globe, Instagram, Linkedin, Twitter } from 'lucide-react';

const LogoMark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 30 Q50 35 50 35 Q50 35 80 30 L80 70 Q50 75 50 75 Q50 75 20 70 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M50 35 L50 75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="50" cy="20" r="6" fill="currentColor" />
  </svg>
);

export default function Applications() {
  return (
    <div className="min-h-screen p-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Применение</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Фирменный стиль</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Примеры использования фирменного стиля в различных носителях
          </p>
        </motion.div>

        {/* Business Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Визитная карточка</h2>
          <div className="bg-gray-100 rounded-2xl p-12 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-8">
              {/* Front */}
              <div className="w-80 h-48 bg-blue-900 rounded-xl shadow-xl p-8 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <LogoMark className="w-8 h-8 text-blue-200" />
                  <span className="text-2xl font-bold text-white">ЛСПК</span>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Иванова Елена Петровна</p>
                  <p className="text-gray-400 text-sm">Директор ЛСПК</p>
                </div>
              </div>

              {/* Back */}
              <div className="w-80 h-48 bg-white border border-gray-200 rounded-xl shadow-xl p-8 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Mail className="w-4 h-4" />
                    <span>info@lspk31.ru</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Phone className="w-4 h-4" />
                    <span>+7 (86145) 3-69-43</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Globe className="w-4 h-4" />
                    <span>lspk31.gosuslugi.ru</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  Краснодарский край, ст. Ленинградская
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Letterhead & Envelope */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Бланк и конверт</h2>
          <div className="grid grid-cols-2 gap-8">
            {/* Letterhead */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="bg-white rounded-lg shadow-sm p-8 aspect-[1/1.4]">
                <div className="flex items-center gap-2 mb-12">
                  <LogoMark className="w-6 h-6 text-gray-900" />
                  <span className="text-xl font-bold text-gray-900">ЛСПК</span>
                </div>
                <div className="space-y-2 text-xs text-gray-400">
                  <p>Краснодарский край, ст. Ленинградская</p>
                  <p>+7 (86145) 3-69-43 | info@lspk31.ru</p>
                </div>
              </div>
            </div>

            {/* Envelope */}
            <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-sm p-6 w-full aspect-[1.6/1] relative">
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <LogoMark className="w-5 h-5 text-blue-800" />
                  <span className="text-sm font-bold text-gray-900">ЛСПК</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Социальные сети</h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Instagram Post */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-700">Instagram пост</p>
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-red-100 rounded-2xl p-8 flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <LogoMark className="w-8 h-8 text-blue-800" />
                  <span className="text-2xl font-bold text-gray-900">ЛСПК</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    Новый продукт
                  </p>
                  <p className="text-sm text-gray-600">
                    Уже в продаже
                  </p>
                </div>
              </div>
            </div>

            {/* Instagram Story */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-700">Instagram сторис</p>
              <div className="aspect-[9/16] bg-blue-900 rounded-2xl p-6 flex flex-col justify-between max-h-96">
                <div className="flex items-center gap-2">
                  <LogoMark className="w-6 h-6 text-white" />
                  <span className="text-xl font-bold text-white">ЛСПК</span>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white mb-2">
                    Скоро
                  </p>
                  <p className="text-sm text-gray-300">
                    Следите за обновлениями
                  </p>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-700">LinkedIn обложка</p>
              <div className="aspect-[4/1.5] bg-white border border-gray-200 rounded-2xl p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <LogoMark className="w-10 h-10 text-blue-800" />
                  <div>
                    <span className="text-3xl font-bold text-gray-900 block">ЛСПК</span>
                    <span className="text-sm text-gray-600">Образование. Профессионализм. Будущее.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Website */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Веб-сайт</h2>
          <div className="bg-gray-100 rounded-2xl p-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="border-b border-gray-200 p-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LogoMark className="w-6 h-6 text-blue-800" />
                  <span className="text-xl font-bold text-gray-900">ЛСПК</span>
                </div>
                <div className="flex gap-6 text-sm font-medium text-gray-700">
                  <span>Специальности</span>
                  <span>Поступающим</span>
                  <span>О колледже</span>
                  <span>Контакты</span>
                </div>
              </div>
              {/* Hero */}
              <div className="p-16 text-center bg-gradient-to-br from-blue-50 to-white">
                <h1 className="text-5xl font-bold text-gray-900 mb-4">
                  Образование —<br />ключ к успеху
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Профессиональная подготовка специалистов в сфере образования и социальной работы
                </p>
                <button className="px-8 py-3 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 transition-colors">
                  Поступить в колледж
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Packaging & Merch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-12 border-t border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Упаковка и мерч</h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Package */}
            <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center aspect-square">
              <div className="w-32 h-40 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col items-center justify-center p-4">
                <LogoMark className="w-12 h-12 text-blue-800 mb-2" />
                <span className="text-lg font-bold text-gray-900">ЛСПК</span>
              </div>
            </div>

            {/* Tote Bag */}
            <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center aspect-square">
              <div className="w-full h-32 bg-blue-900 rounded-lg flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <LogoMark className="w-10 h-10 text-white mx-auto mb-2" />
                  <span className="text-xl font-bold text-white">ЛСПК</span>
                </div>
              </div>
            </div>

            {/* Cup */}
            <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center aspect-square">
              <div className="w-24 h-32 bg-white border-2 border-blue-900 rounded-b-3xl rounded-t-lg flex items-center justify-center shadow-lg">
                <div className="text-center -rotate-12">
                  <LogoMark className="w-8 h-8 text-blue-900 mx-auto mb-1" />
                  <span className="text-sm font-bold text-blue-900">ЛСПК</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
