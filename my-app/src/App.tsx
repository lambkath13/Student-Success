import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Dashboard from './pages/Dashboard';
import PlaceholderPage from './pages/PlaceholderPage';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="students" element={<PlaceholderPage title="Студенты" />} />
        <Route path="teachers" element={<PlaceholderPage title="Преподаватели" />} />
        <Route path="analytics" element={<PlaceholderPage title="Аналитика" />} />
        <Route path="ai-predictions" element={<PlaceholderPage title="AI-Прогнозы" />} />
        <Route path="risk" element={<PlaceholderPage title="Оценка рисков" />} />
        <Route path="tasks" element={<PlaceholderPage title="Задания" />} />
        <Route path="exams" element={<PlaceholderPage title="Экзамены" />} />
        <Route path="courses" element={<PlaceholderPage title="Онлайн-курсы" />} />
        <Route path="reports" element={<PlaceholderPage title="Отчеты" />} />
        <Route path="settings" element={<PlaceholderPage title="Настройки" />} />
      </Route>
    </Routes>
  );
}
