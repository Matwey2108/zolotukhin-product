import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Cover() {
  return (
    <div className="min-h-screen flex items-center justify-center p-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-300/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-red-200/20 to-orange-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Version 1.0 — 2026</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-red-700 bg-clip-text text-transparent"
        >
          ЛСПК
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl text-gray-600 mb-4 font-light tracking-wide"
        >
          Ленинградский социально-педагогический колледж
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg text-gray-500 mb-16 font-light"
        >
          Образование. Профессионализм. Будущее.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-lg font-semibold text-gray-900">Brand Book</h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Руководство по фирменному стилю и визуальной идентичности ГАПОУ КК «ЛСПК».
            Здесь собраны все ключевые элементы и правила использования бренда учреждения.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 pt-8 border-t border-gray-200"
        >
          <div className="grid grid-cols-3 gap-12 text-left max-w-2xl mx-auto">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Дата</p>
              <p className="text-sm text-gray-900">Май 2026</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Версия</p>
              <p className="text-sm text-gray-900">1.0</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Статус</p>
              <p className="text-sm text-gray-900">Актуально</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
