import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Cover from './components/Cover';
import About from './components/About';
import Logo from './components/Logo';
import Colors from './components/Colors';
import Typography from './components/Typography';
import Graphics from './components/Graphics';
import Photography from './components/Photography';
import Applications from './components/Applications';
import Guidelines from './components/Guidelines';

const sections = [
  { id: 'cover', label: 'Обложка', component: Cover },
  { id: 'about', label: 'О бренде', component: About },
  { id: 'logo', label: 'Логотип', component: Logo },
  { id: 'colors', label: 'Цветовая палитра', component: Colors },
  { id: 'typography', label: 'Типографика', component: Typography },
  { id: 'graphics', label: 'Графические элементы', component: Graphics },
  { id: 'photography', label: 'Фотостиль', component: Photography },
  { id: 'applications', label: 'Применение', component: Applications },
  { id: 'guidelines', label: 'Гайдлайны', component: Guidelines },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('cover');
  const [menuOpen, setMenuOpen] = useState(false);

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component || Cover;
  const currentIndex = sections.findIndex(s => s.id === activeSection);

  const navigateNext = () => {
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1].id);
    }
  };

  const navigatePrev = () => {
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1].id);
    }
  };

  return (
    <div className="size-full bg-white overflow-hidden relative">
      {/* Navigation Sidebar */}
      <motion.div
        initial={false}
        animate={{ x: menuOpen ? 0 : -320 }}
        className="fixed left-0 top-0 h-full w-80 bg-white border-r border-gray-200 z-50 shadow-xl"
      >
        <div className="p-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-blue-900">ЛСПК</h3>
              <p className="text-sm text-gray-500 mt-1">Brand Book</p>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-1">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all group ${
                  activeSection === section.id
                    ? 'bg-blue-900 text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-medium ${
                      activeSection === section.id ? 'text-gray-400' : 'text-gray-400'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-medium">{section.label}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    activeSection === section.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                  }`} />
                </div>
              </button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            © 2026 ЛСПК. Все права защищены.
          </p>
        </div>
      </motion.div>

      {/* Menu Toggle Button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed top-8 left-8 z-40 p-3 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Progress Indicator */}
      <div className="fixed top-8 right-8 z-40 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-lg text-sm font-medium">
        {currentIndex + 1} / {sections.length}
      </div>

      {/* Main Content */}
      <div className="size-full overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-full"
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="fixed bottom-8 right-8 z-40 flex gap-2">
        {currentIndex > 0 && (
          <button
            onClick={navigatePrev}
            className="px-6 py-3 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm font-medium"
          >
            Назад
          </button>
        )}
        {currentIndex < sections.length - 1 && (
          <button
            onClick={navigateNext}
            className="px-6 py-3 bg-blue-900 text-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 text-sm font-medium"
          >
            Далее
          </button>
        )}
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/20 z-40"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
