import { motion } from 'motion/react';
import { Circle, Square, Triangle, Zap, Heart, Star, Home, User, Settings } from 'lucide-react';

const iconStyles = [
  { icon: Circle, name: 'Circle' },
  { icon: Square, name: 'Square' },
  { icon: Triangle, name: 'Triangle' },
  { icon: Zap, name: 'Zap' },
  { icon: Heart, name: 'Heart' },
  { icon: Star, name: 'Star' },
  { icon: Home, name: 'Home' },
  { icon: User, name: 'User' },
  { icon: Settings, name: 'Settings' },
];

export default function Graphics() {
  return (
    <div className="min-h-screen p-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Графические элементы</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Визуальный язык</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Минималистичные графические элементы и паттерны для создания единого стиля
          </p>
        </motion.div>

        {/* Patterns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Паттерны и текстуры</h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Grid Pattern */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-50 relative">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                  linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }} />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                <p className="text-sm font-medium text-gray-900">Сетка</p>
              </div>
            </div>

            {/* Dots Pattern */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-blue-900 relative">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle, #ffffff20 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }} />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                <p className="text-sm font-medium text-gray-900">Точки</p>
              </div>
            </div>

            {/* Gradient */}
            <div className="aspect-square rounded-2xl overflow-hidden relative"
              style={{
                background: 'linear-gradient(135deg, #1E40AF 0%, #DC2626 100%)'
              }}
            >
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                <p className="text-sm font-medium text-gray-900">Градиент</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Icon Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Стиль иконок</h2>
          <div className="bg-gray-50 rounded-2xl p-10 mb-6">
            <div className="grid grid-cols-9 gap-6">
              {iconStyles.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-gray-900" strokeWidth={2} />
                  </div>
                  <p className="text-xs text-gray-600 text-center">{item.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <p className="text-sm font-semibold text-gray-900 mb-2">Stroke Width</p>
              <p className="text-xs text-gray-600">2px для большинства иконок</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <p className="text-sm font-semibold text-gray-900 mb-2">Style</p>
              <p className="text-xs text-gray-600">Outline, минималистичный</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <p className="text-sm font-semibold text-gray-900 mb-2">Rounded Corners</p>
              <p className="text-xs text-gray-600">Скруглённые края</p>
            </div>
          </div>
        </motion.div>

        {/* Shapes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Геометрические формы</h2>
          <div className="grid grid-cols-4 gap-6">
            {/* Rounded Rectangles */}
            <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center aspect-square">
              <div className="w-24 h-16 bg-gray-900 rounded-xl" />
            </div>

            {/* Circles */}
            <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center aspect-square">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-700 to-red-600 rounded-full" />
            </div>

            {/* Pills */}
            <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center aspect-square">
              <div className="w-24 h-10 bg-gray-900 rounded-full" />
            </div>

            {/* Squares */}
            <div className="bg-gray-50 rounded-2xl p-8 flex items-center justify-center aspect-square">
              <div className="w-20 h-20 bg-gray-900 rounded-lg" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Используйте скруглённые углы (8-16px radius) для создания мягкого и современного вида
          </p>
        </motion.div>

        {/* Borders & Shadows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Границы и тени</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center aspect-square">
              <div className="w-20 h-20 bg-white border border-gray-200 rounded-xl mb-4" />
              <p className="text-sm font-medium text-gray-900">Тонкая граница</p>
              <p className="text-xs text-gray-500">1px, #E5E7EB</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 flex flex-col items-center justify-center aspect-square">
              <div className="w-20 h-20 bg-white rounded-xl shadow-sm mb-4" />
              <p className="text-sm font-medium text-gray-900">Лёгкая тень</p>
              <p className="text-xs text-gray-500">shadow-sm</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 flex flex-col items-center justify-center aspect-square">
              <div className="w-20 h-20 bg-white rounded-xl shadow-lg mb-4" />
              <p className="text-sm font-medium text-gray-900">Глубокая тень</p>
              <p className="text-xs text-gray-500">shadow-lg</p>
            </div>
          </div>
        </motion.div>

        {/* Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-12 border-t border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Принципы использования</h2>
          <div className="bg-gray-50 rounded-2xl p-10">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Минимализм</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Используйте только необходимые элементы. Каждый графический элемент
                  должен иметь функциональное назначение.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Воздух</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Оставляйте достаточно свободного пространства вокруг элементов.
                  Пустое пространство — это часть дизайна.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Согласованность</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Используйте одинаковые радиусы скругления, толщину обводок
                  и размеры теней во всех элементах.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Иерархия</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Создавайте визуальную иерархию через размер, вес, цвет и контраст,
                  а не через декоративные элементы.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
