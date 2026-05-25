import { motion } from 'motion/react';
import { Check, X, AlertCircle, Download, FileText } from 'lucide-react';

const dos = [
  'Используйте только утверждённые версии логотипа',
  'Соблюдайте минимальное охранное поле вокруг логотипа',
  'Используйте цвета строго из фирменной палитры',
  'Следуйте типографическим стандартам для всех текстов',
  'Обеспечивайте достаточный контраст для читаемости',
  'Используйте высококачественные изображения в фирменном стиле',
  'Сохраняйте минималистичный и чистый дизайн',
  'Оставляйте достаточно белого пространства',
];

const donts = [
  'Не изменяйте пропорции или форму логотипа',
  'Не используйте логотип на занятом или цветном фоне без подложки',
  'Не применяйте эффекты (тени, градиенты, обводки) к логотипу',
  'Не используйте неутверждённые шрифты',
  'Не размещайте логотип слишком мелко (меньше минимального размера)',
  'Не используйте цвета вне фирменной палитры',
  'Не перегружайте дизайн лишними элементами',
  'Не комбинируйте разные версии логотипа на одном носителе',
];

export default function Guidelines() {
  return (
    <div className="min-h-screen p-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Гайдлайны</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Правила использования</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Рекомендации по правильному использованию фирменного стиля ЛСПК
          </p>
        </motion.div>

        {/* Main Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 gap-8">
            {/* Do's */}
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">Рекомендуется</h2>
              </div>
              <div className="space-y-4">
                {dos.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className="flex gap-3 items-start"
                  >
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-800 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Don'ts */}
            <div className="bg-red-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                  <X className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">Не рекомендуется</h2>
              </div>
              <div className="space-y-4">
                {donts.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className="flex gap-3 items-start"
                  >
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-800 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Minimum Size */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Минимальный размер</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-10">
              <p className="text-sm font-medium text-gray-700 mb-6">Печатные материалы</p>
              <div className="bg-white rounded-lg p-8 flex items-center justify-center border border-gray-200">
                <div className="text-center">
                  <svg viewBox="0 0 100 100" className="w-12 h-12 text-gray-900 mx-auto mb-3" fill="none">
                    <path d="M50 10 L90 90 L10 90 Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                    <circle cx="50" cy="50" r="8" fill="currentColor" />
                  </svg>
                  <p className="text-xs text-gray-500">Мин. 15 мм</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-10">
              <p className="text-sm font-medium text-gray-700 mb-6">Цифровые носители</p>
              <div className="bg-white rounded-lg p-8 flex items-center justify-center border border-gray-200">
                <div className="text-center">
                  <svg viewBox="0 0 100 100" className="w-12 h-12 text-gray-900 mx-auto mb-3" fill="none">
                    <path d="M50 10 L90 90 L10 90 Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                    <circle cx="50" cy="50" r="8" fill="currentColor" />
                  </svg>
                  <p className="text-xs text-gray-500">Мин. 32 px</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Важные замечания</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <AlertCircle className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Согласование</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Все новые материалы должны быть согласованы с отделом маркетинга
                перед публикацией
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <FileText className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Документация</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Всегда используйте актуальную версию брендбука и логотипов
                из официального репозитория
              </p>
            </div>
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
              <Download className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Ресурсы</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Все файлы логотипов доступны в форматах PNG, SVG и PDF
                в высоком разрешении
              </p>
            </div>
          </div>
        </motion.div>

        {/* Usage Examples Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Контекст использования</h2>
          <div className="bg-gray-50 rounded-2xl p-10">
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Маркетинговые материалы</p>
                  <p className="text-sm text-gray-600">
                    Брошюры, флаеры, презентации, баннеры
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Цифровые платформы</p>
                  <p className="text-sm text-gray-600">
                    Сайт, мобильные приложения, email-рассылки
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Корпоративные документы</p>
                  <p className="text-sm text-gray-600">
                    Бланки, презентации, отчёты, визитки
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Сувенирная продукция</p>
                  <p className="text-sm text-gray-600">
                    Футболки, сумки, блокноты, ручки
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Социальные сети</p>
                  <p className="text-sm text-gray-600">
                    Посты, сторис, обложки профилей
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-900 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Упаковка продукции</p>
                  <p className="text-sm text-gray-600">
                    Коробки, пакеты, этикетки
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="pt-12 border-t border-gray-200"
        >
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-semibold mb-4">Нужна помощь?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Если у вас есть вопросы по использованию фирменного стиля или вам нужны
              дополнительные материалы, свяжитесь с отделом маркетинга
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <a href="mailto:info@lspk31.ru" className="text-gray-300 hover:text-white transition-colors">
                info@lspk31.ru
              </a>
              <span className="text-gray-600">|</span>
              <span className="text-gray-300">Администрация колледжа</span>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-blue-800" fill="none">
              <path d="M20 30 Q50 35 50 35 Q50 35 80 30 L80 70 Q50 75 50 75 Q50 75 20 70 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M50 35 L50 75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="50" cy="20" r="6" fill="currentColor" />
            </svg>
            <span className="text-2xl font-bold text-gray-900">ЛСПК</span>
          </div>
          <p className="text-sm text-gray-500 mb-2">Brand Book Version 1.0 — Май 2026</p>
          <p className="text-xs text-gray-400">
            © 2026 ГАПОУ КК «Ленинградский социально-педагогический колледж». Все права защищены.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
