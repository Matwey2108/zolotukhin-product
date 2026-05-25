import { motion } from 'motion/react';

const typographyScale = [
  { name: 'Display Large', size: '72px', weight: '700', usage: 'Заголовки на главной странице' },
  { name: 'Display', size: '56px', weight: '700', usage: 'Крупные заголовки' },
  { name: 'Heading 1', size: '48px', weight: '600', usage: 'Основные заголовки страниц' },
  { name: 'Heading 2', size: '36px', weight: '600', usage: 'Заголовки секций' },
  { name: 'Heading 3', size: '28px', weight: '600', usage: 'Подзаголовки' },
  { name: 'Heading 4', size: '24px', weight: '500', usage: 'Мелкие заголовки' },
  { name: 'Body Large', size: '18px', weight: '400', usage: 'Крупный основной текст' },
  { name: 'Body', size: '16px', weight: '400', usage: 'Основной текст' },
  { name: 'Body Small', size: '14px', weight: '400', usage: 'Второстепенный текст' },
  { name: 'Caption', size: '12px', weight: '400', usage: 'Подписи и метки' },
];

export default function Typography() {
  return (
    <div className="min-h-screen p-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Типографика</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Шрифты и текст</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Чистая и современная типографика на основе системных шрифтов
          </p>
        </motion.div>

        {/* Font Families */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Семейства шрифтов</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-10">
              <p className="text-sm font-medium text-gray-500 mb-4">Основной шрифт</p>
              <p className="text-6xl font-bold mb-6 text-gray-900">Inter</p>
              <p className="text-sm text-gray-600 mb-4">
                Используется для всех заголовков и основного текста
              </p>
              <div className="flex gap-2 text-xs text-gray-500">
                <span className="px-3 py-1 bg-white rounded-full">Regular</span>
                <span className="px-3 py-1 bg-white rounded-full">Medium</span>
                <span className="px-3 py-1 bg-white rounded-full">Semibold</span>
                <span className="px-3 py-1 bg-white rounded-full">Bold</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-10">
              <p className="text-sm font-medium text-gray-500 mb-4">Моноширинный шрифт</p>
              <p className="text-6xl font-bold mb-6 text-gray-900 font-mono">Mono</p>
              <p className="text-sm text-gray-600 mb-4">
                Для кода, чисел и технической информации
              </p>
              <div className="flex gap-2 text-xs text-gray-500">
                <span className="px-3 py-1 bg-white rounded-full">Regular</span>
                <span className="px-3 py-1 bg-white rounded-full">Medium</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Type Scale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Типографическая шкала</h2>
          <div className="space-y-8">
            {typographyScale.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                className="border-b border-gray-100 pb-8 last:border-b-0"
              >
                <div className="grid grid-cols-12 gap-8 items-baseline">
                  <div className="col-span-3">
                    <p className="text-sm font-semibold text-gray-900">{type.name}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {type.size} / {type.weight}
                    </p>
                  </div>
                  <div className="col-span-6">
                    <p
                      style={{
                        fontSize: type.size,
                        fontWeight: type.weight,
                        lineHeight: '1.2',
                      }}
                      className="text-gray-900"
                    >
                      The quick brown fox
                    </p>
                  </div>
                  <div className="col-span-3">
                    <p className="text-xs text-gray-600">{type.usage}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-12 border-t border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Примеры использования</h2>
          <div className="grid grid-cols-2 gap-8">
            {/* Example 1 */}
            <div className="bg-gray-50 rounded-2xl p-10">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Категория
              </p>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Заголовок статьи или раздела
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Основной текст должен быть легко читаемым и иметь достаточную высоту строки
                для комфортного чтения. Используйте 16px для основного текста.
              </p>
              <p className="text-sm text-gray-500">
                Дополнительная информация меньшим размером
              </p>
            </div>

            {/* Example 2 */}
            <div className="bg-gray-900 rounded-2xl p-10 text-white">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                На тёмном фоне
              </p>
              <h3 className="text-3xl font-semibold mb-4">
                Заголовок на тёмном фоне
              </h3>
              <p className="text-base text-gray-300 leading-relaxed mb-4">
                Используйте немного больший weight для текста на тёмном фоне,
                чтобы компенсировать визуальное истончение.
              </p>
              <p className="text-sm text-gray-400">
                Снизьте контраст для вспомогательного текста
              </p>
            </div>
          </div>
        </motion.div>

        {/* Typography Rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 bg-blue-50 rounded-2xl p-10"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Правила использования</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Межстрочное расстояние</h4>
              <p className="text-sm text-gray-600">
                Заголовки: 1.2–1.3<br />
                Основной текст: 1.5–1.6<br />
                Крупный текст: 1.4
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Длина строки</h4>
              <p className="text-sm text-gray-600">
                Оптимально: 60-80 символов<br />
                Максимум: 120 символов<br />
                Минимум: 40 символов
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Иерархия</h4>
              <p className="text-sm text-gray-600">
                Используйте не более 3 уровней заголовков на одной странице
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Выравнивание</h4>
              <p className="text-sm text-gray-600">
                Основной текст: по левому краю<br />
                Заголовки: по левому краю или по центру
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
