import { motion } from 'motion/react';
import { X } from 'lucide-react';

const LogoMark = ({ className = "", filled = false }: { className?: string; filled?: boolean }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Открытая книга */}
    <path
      d="M20 30 Q50 35 50 35 Q50 35 80 30 L80 70 Q50 75 50 75 Q50 75 20 70 Z"
      stroke="currentColor"
      strokeWidth={filled ? "0" : "2.5"}
      fill={filled ? "currentColor" : "none"}
      strokeLinejoin="round"
    />
    <path
      d="M50 35 L50 75"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Звезда знаний */}
    <circle cx="50" cy="20" r="6" fill="currentColor" />
  </svg>
);

export default function Logo() {
  return (
    <div className="min-h-screen p-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Логотип</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Визуальный знак</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Логотип ЛСПК состоит из знака (открытая книга со звездой) и текстового элемента.
            Используйте версии в соответствии с контекстом и фоном.
          </p>
        </motion.div>

        {/* Primary Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Основная версия</h2>
          <div className="bg-gray-50 rounded-2xl p-16 flex flex-col items-center justify-center">
            <div className="flex items-center gap-4 mb-8">
              <LogoMark className="w-16 h-16 text-blue-800" />
              <span className="text-5xl font-bold tracking-tight text-gray-900">ЛСПК</span>
            </div>
            <p className="text-sm text-gray-500">Используйте на светлом фоне</p>
          </div>
        </motion.div>

        {/* Variations */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-base font-semibold text-gray-900 mb-4">Горизонтальная</h3>
            <div className="bg-gray-50 rounded-xl p-10 flex items-center justify-center aspect-video">
              <div className="flex items-center gap-3">
                <LogoMark className="w-10 h-10 text-blue-800" />
                <span className="text-3xl font-bold tracking-tight text-gray-900">ЛСПК</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-base font-semibold text-gray-900 mb-4">Вертикальная</h3>
            <div className="bg-gray-50 rounded-xl p-10 flex items-center justify-center aspect-video">
              <div className="flex flex-col items-center gap-2">
                <LogoMark className="w-12 h-12 text-blue-800" />
                <span className="text-2xl font-bold tracking-tight text-gray-900">ЛСПК</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-base font-semibold text-gray-900 mb-4">Только знак</h3>
            <div className="bg-gray-50 rounded-xl p-10 flex items-center justify-center aspect-video">
              <LogoMark className="w-16 h-16 text-blue-800" />
            </div>
          </motion.div>
        </div>

        {/* Color Versions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Цветовые версии</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">На тёмном фоне</p>
              <div className="bg-blue-900 rounded-xl p-12 flex items-center justify-center">
                <div className="flex items-center gap-4">
                  <LogoMark className="w-14 h-14 text-white" />
                  <span className="text-4xl font-bold tracking-tight text-white">ЛСПК</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Чёрно-белая</p>
              <div className="bg-gray-100 rounded-xl p-12 flex items-center justify-center border border-gray-200">
                <div className="flex items-center gap-4">
                  <LogoMark className="w-14 h-14 text-blue-900" filled />
                  <span className="text-4xl font-bold tracking-tight text-blue-900">ЛСПК</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Don'ts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Запрещённые варианты</h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: 'Не искажать пропорции', transform: 'scale-x-150' },
              { label: 'Не поворачивать', transform: 'rotate-45' },
              { label: 'Не использовать другие цвета', color: 'text-red-500' },
            ].map((dont, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center aspect-square border border-gray-200 relative overflow-hidden">
                  <div className={dont.transform || dont.color || ''}>
                    <div className="flex items-center gap-2">
                      <LogoMark className={`w-10 h-10 ${dont.color || 'text-blue-800'}`} />
                      <span className={`text-2xl font-bold ${dont.color || 'text-gray-900'}`}>ЛСПК</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <X className="w-16 h-16 text-red-500 stroke-[3]" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-3 text-center">{dont.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Clear Space */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Охранное поле</h2>
          <p className="text-base text-gray-600 mb-8 max-w-2xl">
            Минимальное свободное пространство вокруг логотипа должно быть равно высоте знака
          </p>
          <div className="bg-gray-50 rounded-2xl p-16 inline-flex">
            <div className="border-2 border-dashed border-gray-300 p-12">
              <div className="flex items-center gap-4">
                <LogoMark className="w-12 h-12 text-blue-800" />
                <span className="text-3xl font-bold tracking-tight text-gray-900">ЛСПК</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
