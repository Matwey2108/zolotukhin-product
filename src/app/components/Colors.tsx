import { motion } from 'motion/react';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const primaryColors = [
  {
    name: 'Primary Black',
    hex: '#0A0A0A',
    rgb: 'RGB(10, 10, 10)',
    cmyk: 'CMYK(0, 0, 0, 96)',
    description: 'Основной цвет бренда',
  },
  {
    name: 'Primary White',
    hex: '#FFFFFF',
    rgb: 'RGB(255, 255, 255)',
    cmyk: 'CMYK(0, 0, 0, 0)',
    description: 'Фоновый цвет',
  },
];

const secondaryColors = [
  {
    name: 'Charcoal',
    hex: '#2D2D2D',
    rgb: 'RGB(45, 45, 45)',
    cmyk: 'CMYK(0, 0, 0, 82)',
  },
  {
    name: 'Steel',
    hex: '#6B6B6B',
    rgb: 'RGB(107, 107, 107)',
    cmyk: 'CMYK(0, 0, 0, 58)',
  },
  {
    name: 'Silver',
    hex: '#ACACAC',
    rgb: 'RGB(172, 172, 172)',
    cmyk: 'CMYK(0, 0, 0, 33)',
  },
  {
    name: 'Cloud',
    hex: '#F5F5F5',
    rgb: 'RGB(245, 245, 245)',
    cmyk: 'CMYK(0, 0, 0, 4)',
  },
];

const accentColors = [
  {
    name: 'Синий ЛСПК',
    hex: '#1E40AF',
    rgb: 'RGB(30, 64, 175)',
    cmyk: 'CMYK(83, 63, 0, 31)',
  },
  {
    name: 'Красный акцент',
    hex: '#DC2626',
    rgb: 'RGB(220, 38, 38)',
    cmyk: 'CMYK(0, 83, 83, 14)',
  },
];

const ColorCard = ({ color }: { color: typeof primaryColors[0] }) => {
  const [copied, setCopied] = useState(false);

  const copyHex = () => {
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden group cursor-pointer"
      onClick={copyHex}
    >
      <div
        className="h-40 relative"
        style={{ backgroundColor: color.hex }}
      >
        <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {copied ? (
            <Check className="w-4 h-4 text-white" />
          ) : (
            <Copy className="w-4 h-4 text-white" />
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-gray-900 mb-1">{color.name}</h3>
        {'description' in color && (
          <p className="text-xs text-gray-500 mb-4">{color.description}</p>
        )}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">HEX</span>
            <span className="text-sm font-mono font-medium text-gray-900">{color.hex}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">RGB</span>
            <span className="text-xs font-mono text-gray-700">{color.rgb}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">CMYK</span>
            <span className="text-xs font-mono text-gray-700">{color.cmyk}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Colors() {
  return (
    <div className="min-h-screen p-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Цветовая палитра</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Цвета бренда</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Официальная палитра ЛСПК: синий символизирует знание и стабильность, красный — энергию и активность
          </p>
        </motion.div>

        {/* Primary Colors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Основные цвета</h2>
          <div className="grid grid-cols-2 gap-6">
            {primaryColors.map((color) => (
              <ColorCard key={color.hex} color={color} />
            ))}
          </div>
        </motion.div>

        {/* Secondary Colors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Дополнительные цвета</h2>
          <div className="grid grid-cols-4 gap-6">
            {secondaryColors.map((color) => (
              <ColorCard key={color.hex} color={color} />
            ))}
          </div>
        </motion.div>

        {/* Accent Colors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Акцентные цвета</h2>
          <div className="grid grid-cols-2 gap-6">
            {accentColors.map((color) => (
              <ColorCard key={color.hex} color={color} />
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Используйте акцентные цвета умеренно для выделения важных элементов
          </p>
        </motion.div>

        {/* Color Combinations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-12 border-t border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Цветовые комбинации</h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Combination 1 */}
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-sm font-medium text-gray-700 mb-4">Основная</p>
              <div className="flex gap-2 mb-3">
                <div className="flex-1 h-20 rounded-lg" style={{ backgroundColor: '#0A0A0A' }} />
                <div className="flex-1 h-20 rounded-lg" style={{ backgroundColor: '#FFFFFF' }} />
              </div>
              <p className="text-xs text-gray-600">Для большинства применений</p>
            </div>

            {/* Combination 2 */}
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-sm font-medium text-gray-700 mb-4">С акцентом</p>
              <div className="flex gap-2 mb-3">
                <div className="flex-1 h-20 rounded-lg" style={{ backgroundColor: '#FFFFFF' }} />
                <div className="flex-1 h-20 rounded-lg" style={{ backgroundColor: '#1E40AF' }} />
              </div>
              <p className="text-xs text-gray-600">Для кнопок и ссылок</p>
            </div>

            {/* Combination 3 */}
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-sm font-medium text-gray-700 mb-4">Градиент</p>
              <div className="h-20 rounded-lg mb-3" style={{
                background: 'linear-gradient(135deg, #1E40AF 0%, #DC2626 100%)'
              }} />
              <p className="text-xs text-gray-600">Для баннеров и заголовков</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
