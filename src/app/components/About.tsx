import { motion } from 'motion/react';
import { Target, Eye, Heart, Zap } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Качество образования',
    description: 'Мы обеспечиваем высокий уровень подготовки специалистов в соответствии с государственными стандартами'
  },
  {
    icon: Heart,
    title: 'Забота о студентах',
    description: 'Создаём комфортные условия для обучения и всестороннего развития каждого студента'
  },
  {
    icon: Zap,
    title: 'Профессионализм',
    description: 'Высококвалифицированный преподавательский состав с практическим опытом работы'
  },
];

export default function About() {
  return (
    <div className="min-h-screen p-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">О бренде</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">О колледже</h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            ЛСПК — государственное автономное профессиональное образовательное учреждение,
            которое готовит квалифицированных специалистов в области образования и социальной работы.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-10"
          >
            <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Миссия</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Подготовка высококвалифицированных, конкурентоспособных специалистов
              в области образования и социальной сферы, способных эффективно работать
              в современных условиях и вносить вклад в развитие общества.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-10"
          >
            <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Видение</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Быть ведущим образовательным учреждением региона, признанным центром
              профессионального развития и инноваций в сфере педагогического
              и социального образования.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-10">Наши ценности</h2>
          <div className="grid grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 pt-12 border-t border-gray-200"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Позиционирование</h2>
          <div className="bg-blue-900 rounded-2xl p-10 text-white">
            <p className="text-lg leading-relaxed">
              <span className="font-semibold">ЛСПК</span> — государственное образовательное учреждение
              с многолетней историей и традициями. Мы готовим будущих педагогов и социальных работников,
              предоставляя качественное среднее профессиональное образование. Наши выпускники востребованы
              в образовательных учреждениях и социальных службах Краснодарского края.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
