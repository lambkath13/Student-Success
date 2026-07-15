export type MetricTone = 'success' | 'warning' | 'purple' | 'primary' | 'stress';
export type AssignmentStatus = 'in_progress' | 'done';

export interface StudentMetric {
  id: string;
  title: string;
  value: string;
  badgeLabel: string;
  tone: MetricTone;
  badgeVariant: 'pill' | 'text';
  icon: 'hours' | 'attendance' | 'courses' | 'assignments' | 'stress';
}

export interface PerformancePoint {
  month: string;
  score: number;
}

export interface ActivitySlice {
  name: string;
  value: number;
  hours: string;
  color: string;
}

export interface CourseRow {
  id: string;
  name: string;
  icon: 'math' | 'code' | 'econ' | 'writing' | 'english';
  iconBg: string;
  iconColor: string;
  progress: number;
  averageScore: number;
  attendance: number;
  assignmentsDone: number;
  assignmentsTotal: number;
  assignmentStatus: AssignmentStatus;
}

export interface GradeForecast {
  value: number;
  max: number;
  label: string;
  likelihood: string;
  trendLabel: string;
}

export interface RiskAssessment {
  level: 'low' | 'medium' | 'high';
  title: string;
  description: string;
  trendLabel: string;
}

export const STUDENT_METRICS: StudentMetric[] = [
  {
    id: 'hours',
    title: 'Часы обучения',
    value: '16.4 ч/нед.',
    badgeLabel: '↑ 12% чем в прошлом месяце',
    tone: 'primary',
    badgeVariant: 'pill',
    icon: 'hours',
  },
  {
    id: 'attendance',
    title: 'Посещаемость',
    value: '94%',
    badgeLabel: '↑ 6% чем в прошлом месяце',
    tone: 'success',
    badgeVariant: 'pill',
    icon: 'attendance',
  },
  {
    id: 'courses',
    title: 'Онлайн-курсы',
    value: '3 / 5',
    badgeLabel: 'В процессе',
    tone: 'purple',
    badgeVariant: 'text',
    icon: 'courses',
  },
  {
    id: 'assignments',
    title: 'Выполнение заданий',
    value: '88%',
    badgeLabel: '↑ 8% чем в прошлом месяце',
    tone: 'warning',
    badgeVariant: 'pill',
    icon: 'assignments',
  },
  {
    id: 'stress',
    title: 'Уровень стресса',
    value: '42 / 100',
    badgeLabel: 'Умеренный',
    tone: 'stress',
    badgeVariant: 'text',
    icon: 'stress',
  },
];

export const PERFORMANCE_TRAJECTORY: PerformancePoint[] = [
  { month: 'Янв', score: 68 },
  { month: 'Фев', score: 72 },
  { month: 'Мар', score: 75 },
  { month: 'Апр', score: 78 },
  { month: 'Май', score: 82 },
  { month: 'Июн', score: 82 },
];

export const ACTIVITY_DISTRIBUTION: ActivitySlice[] = [
  { name: 'Учеба', value: 65, hours: '10.6 ч', color: '#2563EB' },
  { name: 'Онлайн-курсы', value: 15, hours: '2.4 ч', color: '#10B981' },
  { name: 'Задания', value: 10, hours: '1.6 ч', color: '#F59E0B' },
  { name: 'Внеучебная деятельность', value: 10, hours: '1.6 ч', color: '#8B5CF6' },
];

export const COURSE_ROWS: CourseRow[] = [
  {
    id: 'math',
    name: 'Математический анализ',
    icon: 'math',
    iconBg: 'rgba(37, 99, 235, 0.12)',
    iconColor: '#2563EB',
    progress: 82,
    averageScore: 4.3,
    attendance: 96,
    assignmentsDone: 2,
    assignmentsTotal: 3,
    assignmentStatus: 'in_progress',
  },
  {
    id: 'prog',
    name: 'Программирование',
    icon: 'code',
    iconBg: 'rgba(16, 185, 129, 0.12)',
    iconColor: '#10B981',
    progress: 75,
    averageScore: 4.0,
    attendance: 92,
    assignmentsDone: 3,
    assignmentsTotal: 3,
    assignmentStatus: 'done',
  },
  {
    id: 'econ',
    name: 'Экономика',
    icon: 'econ',
    iconBg: 'rgba(245, 158, 11, 0.12)',
    iconColor: '#F59E0B',
    progress: 68,
    averageScore: 3.8,
    attendance: 90,
    assignmentsDone: 1,
    assignmentsTotal: 2,
    assignmentStatus: 'in_progress',
  },
  {
    id: 'writing',
    name: 'Академическое письмо',
    icon: 'writing',
    iconBg: 'rgba(139, 92, 246, 0.12)',
    iconColor: '#8B5CF6',
    progress: 90,
    averageScore: 4.6,
    attendance: 98,
    assignmentsDone: 2,
    assignmentsTotal: 2,
    assignmentStatus: 'done',
  },
  {
    id: 'eng',
    name: 'Английский язык',
    icon: 'english',
    iconBg: 'rgba(239, 68, 68, 0.12)',
    iconColor: '#EF4444',
    progress: 85,
    averageScore: 4.4,
    attendance: 95,
    assignmentsDone: 1,
    assignmentsTotal: 1,
    assignmentStatus: 'done',
  },
];

export const GRADE_FORECAST: GradeForecast = {
  value: 4.2,
  max: 5.0,
  label: 'Прогноз итоговой оценки (AI)',
  likelihood: 'Высокая вероятность на отлично',
  trendLabel: '↑ 0.3 чем в прошлом месяце',
};

export const RISK_ASSESSMENT: RiskAssessment = {
  level: 'low',
  title: 'Низкий риск',
  description: 'Всё в порядке! Продолжайте в том же духе.',
  trendLabel: '↓ 10% чем в прошлом месяце',
};
