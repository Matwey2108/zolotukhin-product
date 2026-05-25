import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const photoExamples = [
  {
    url: 'https://images.unsplash.com/photo-1774853094610-89be6f1a7690?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    description: 'Минималистичное рабочее пространство'
  },
  {
    url: 'https://images.unsplash.com/photo-1765371513492-264506c3ad09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    description: 'Современный офис с естественным светом'
  },
  {
    url: 'https://images.unsplash.com/photo-1765371512336-99c2b1c6975f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    description: 'Чистое пространство с зеленью'
  },
  {
    url: 'https://images.unsplash.com/photo-1772475385509-93fd87a2d4ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    description: 'Тёплые тона и натуральные материалы'
  },
];

export default function Photography() {
  return (
    <div className="min-h-screen p-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Фотостиль</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Визуальный контент</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Фотографии должны отражать профессионализм и современность образовательного учреждения,
            создавать позитивное впечатление и вдохновлять на обучение
          </p>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Примеры фотографий</h2>
          <div className="grid grid-cols-2 gap-6">
            {photoExamples.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
              >
                <img
                  src={photo.url}
                  alt={photo.description}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white text-sm font-medium">{photo.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Photography Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Правила обработки</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="font-semibold text-gray-900 mb-3">Освещение</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Предпочтение естественному свету. Избегайте резких теней и переэкспонированных
                участков. Мягкое рассеянное освещение.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="font-semibold text-gray-900 mb-3">Цветокоррекция</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Нейтральная цветовая температура, слегка холодные тона. Избегайте
                насыщенных и кислотных цветов.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="font-semibold text-gray-900 mb-3">Композиция</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Минималистичная композиция с чистыми линиями. Много пустого
                пространства. Правило третей.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Do's and Don'ts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Что можно и нельзя</h2>
          <div className="grid grid-cols-2 gap-8">
            {/* Do's */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Рекомендуется</h3>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Светлые, воздушные фотографии</p>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Минималистичная композиция</p>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Нейтральные и натуральные цвета</p>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Естественное освещение</p>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Чистые линии и геометрия</p>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Современные интерьеры</p>
                </div>
              </div>
            </div>

            {/* Don'ts */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Не рекомендуется</h3>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Тёмные, мрачные фотографии</p>
                </div>
                <div className="flex gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Перегруженная композиция</p>
                </div>
                <div className="flex gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Яркие, кислотные цвета</p>
                </div>
                <div className="flex gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Искусственное освещение с жёлтым оттенком</p>
                </div>
                <div className="flex gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Слишком много объектов в кадре</p>
                </div>
                <div className="flex gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">Устаревшие интерьеры</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mood Board */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-12 border-t border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Ключевые характеристики</h2>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-10">
            <div className="grid grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-sm">
                  <span className="text-2xl">☀️</span>
                </div>
                <p className="font-semibold text-gray-900 mb-1">Светлые</p>
                <p className="text-xs text-gray-600">Много белого пространства</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-sm">
                  <span className="text-2xl">✨</span>
                </div>
                <p className="font-semibold text-gray-900 mb-1">Чистые</p>
                <p className="text-xs text-gray-600">Минимум деталей</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-sm">
                  <span className="text-2xl">🌿</span>
                </div>
                <p className="font-semibold text-gray-900 mb-1">Натуральные</p>
                <p className="text-xs text-gray-600">Природные материалы</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-sm">
                  <span className="text-2xl">🎯</span>
                </div>
                <p className="font-semibold text-gray-900 mb-1">Современные</p>
                <p className="text-xs text-gray-600">Актуальный стиль</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
