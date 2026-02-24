import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  Users, 
  Target, 
  Search, 
  BarChart3, 
  PieChart, 
  Layers, 
  Zap, 
  Award, 
  Mail, 
  Phone, 
  Linkedin,
  Globe,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Cpu,
  LineChart,
  LayoutDashboard
} from 'lucide-react';

// --- Types ---
interface SlideProps {
  isActive: boolean;
}

// --- Components ---

const SlideWrapper = ({ children, isActive }: { children: React.ReactNode; isActive: boolean; key?: React.Key }) => (
  <AnimatePresence mode="wait">
    {isActive && (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full h-full flex flex-col items-center justify-center p-8 md:p-16"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-8 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tight"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-orange-500 font-medium uppercase tracking-widest text-sm"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      animate={{ width: 60 }}
      className="h-1 bg-orange-500 mx-auto mt-4"
    />
  </div>
);

// --- Slides ---

const Slide1 = () => (
  <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-12">
    <div className="flex-1 text-center md:text-left z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-4 leading-tight">
          ĐOÀN ĐÌNH <span className="text-orange-500">HIỂN</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 font-light mb-8 max-w-xl">
          Marketing Manager | Digital Growth Strategist
        </p>
        <div className="inline-block px-6 py-3 border border-orange-500/30 bg-orange-500/10 rounded-full">
          <p className="text-orange-500 font-medium">8+ Years Building Scalable Marketing Systems</p>
        </div>
      </motion.div>
    </div>
    <div className="flex-1 relative">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-64 h-64 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl"
      >
        <img 
          src="https://picsum.photos/seed/hien/800/800" 
          alt="Đoàn Đình Hiển" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      <div className="absolute -top-4 -right-4 w-full h-full border-2 border-orange-500/20 rounded-2xl -z-0" />
    </div>
  </div>
);

const Slide2 = () => (
  <div className="max-w-4xl w-full">
    <SectionTitle subtitle="About Me">Professional Profile</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <div className="space-y-6">
        <p className="text-xl text-slate-300 leading-relaxed">
          Marketing Manager với hơn 8 năm kinh nghiệm xây dựng hệ thống Digital Marketing cho doanh nghiệp SME.
        </p>
        <div className="h-px bg-white/10 w-full" />
        <p className="text-slate-400">
          Tập trung vào việc kết hợp giữa tư duy chiến lược và thực thi kỹ thuật để tạo ra kết quả kinh doanh thực tế.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {[
          "Xây dựng chiến lược tăng trưởng",
          "Quản lý ngân sách lớn",
          "Tối ưu hiệu suất Ads",
          "Phát triển SEO bền vững",
          "Xây dựng đội nhóm hiệu suất cao"
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
          >
            <CheckCircle2 className="text-orange-500 w-5 h-5 flex-shrink-0" />
            <span className="text-slate-200 font-medium">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const Slide3 = () => (
  <div className="max-w-5xl w-full">
    <SectionTitle subtitle="Numbers">Career Snapshot</SectionTitle>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
      {[
        { label: "Kinh nghiệm", value: "8+", unit: "Năm", icon: Briefcase },
        { label: "Ngân sách", value: "10+", unit: "Tỷ/năm", icon: PieChart },
        { label: "ROAS TB", value: "4.5", unit: "x", icon: TrendingUp },
        { label: "Team Size", value: "15+", unit: "Người", icon: Users },
        { label: "Dự án", value: "50+", unit: "Chiến dịch", icon: Layers },
      ].map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center flex flex-col items-center group hover:bg-orange-500/5 hover:border-orange-500/30 transition-all"
        >
          <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <stat.icon className="text-orange-500 w-6 h-6" />
          </div>
          <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-xs text-orange-500 font-bold uppercase tracking-wider mb-2">{stat.unit}</div>
          <div className="text-sm text-slate-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </div>
);

const Slide4 = () => (
  <div className="max-w-4xl w-full">
    <SectionTitle subtitle="Skills">Core Expertise</SectionTitle>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {[
        { title: "Performance Marketing", icon: Target },
        { title: "SEO Strategy", icon: Search },
        { title: "Marketing Funnel", icon: Layers },
        { title: "Brand Development", icon: Award },
        { title: "Team Leadership", icon: Users },
        { title: "Budget Optimization", icon: BarChart3 },
        { title: "CRO", icon: Zap },
        { title: "Market Analysis", icon: Globe },
      ].map((skill, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -5 }}
          className="p-6 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center text-center gap-3"
        >
          <skill.icon className="text-orange-500 w-8 h-8" />
          <span className="text-sm font-medium text-slate-200">{skill.title}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

const Slide5 = () => (
  <div className="max-w-4xl w-full text-center">
    <SectionTitle subtitle="Mindset">Marketing Philosophy</SectionTitle>
    <div className="mt-12 space-y-8">
      <motion.p 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-3xl md:text-4xl font-display italic text-slate-400"
      >
        "Marketing không phải là chạy quảng cáo."
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {[
          "Hệ thống tạo khách hàng",
          "Hệ thống tối ưu chi phí",
          "Hệ thống tăng trưởng dài hạn",
          "Hệ thống chuyển đổi dữ liệu thành doanh thu"
        ].map((text, i) => (
          <div key={i} className="p-6 bg-orange-500/5 border-l-4 border-orange-500 text-left">
            <p className="text-xl font-medium text-white">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Slide6 = () => (
  <div className="max-w-5xl w-full">
    <SectionTitle subtitle="Strategy">Marketing System Framework</SectionTitle>
    <div className="relative flex flex-col items-center mt-8">
      {[
        { label: "Traffic", desc: "Đa kênh: Ads, SEO, Social", color: "bg-orange-600" },
        { label: "Lead", desc: "Landing Page, Lead Magnet", color: "bg-orange-500" },
        { label: "Nurture", desc: "Email, Remarketing, Content", color: "bg-orange-400" },
        { label: "Conversion", desc: "Sales Pipeline, Offers", color: "bg-orange-300" },
        { label: "Retention", desc: "Customer Success, Loyalty", color: "bg-orange-200" },
        { label: "Upsell", desc: "LTV Optimization", color: "bg-orange-100" },
      ].map((step, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, width: "50%" }}
          animate={{ opacity: 1, width: `${100 - i * 10}%` }}
          transition={{ delay: i * 0.1 }}
          className={`flex items-center justify-between p-4 mb-2 rounded-lg ${step.color} text-slate-900`}
        >
          <span className="font-bold uppercase tracking-tighter text-lg">{step.label}</span>
          <span className="text-sm font-medium opacity-80">{step.desc}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

const Slide7 = () => (
  <div className="max-w-5xl w-full">
    <SectionTitle subtitle="Construction Industry">Case Study 1: Công ty Xây Dựng</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      <div className="bg-red-500/5 p-6 rounded-2xl border border-red-500/20">
        <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2">
          <Target className="w-5 h-5" /> Vấn đề
        </h4>
        <ul className="space-y-3 text-slate-400 text-sm">
          <li>• Không có hệ thống online</li>
          <li>• Phụ thuộc khách truyền thống</li>
          <li>• Ads chi phí cao</li>
        </ul>
      </div>
      <div className="bg-blue-500/5 p-6 rounded-2xl border border-blue-500/20">
        <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
          <Cpu className="w-5 h-5" /> Giải pháp
        </h4>
        <ul className="space-y-3 text-slate-400 text-sm">
          <li>• Xây dựng hệ thống Digital tổng thể</li>
          <li>• SEO + Ads + Remarketing</li>
          <li>• Tối ưu Landing Page</li>
        </ul>
      </div>
      <div className="bg-green-500/5 p-6 rounded-2xl border border-green-500/20">
        <h4 className="text-green-400 font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5" /> Kết quả
        </h4>
        <ul className="space-y-3 text-slate-200 text-sm font-medium">
          <li className="text-green-400">• Tăng 250% Lead</li>
          <li>• Giảm 38% CPL</li>
          <li>• ROAS 2.1 → 4.5</li>
          <li>• 100+ từ khóa Top 10</li>
        </ul>
      </div>
    </div>
  </div>
);

const Slide8 = () => (
  <div className="max-w-5xl w-full">
    <SectionTitle subtitle="Data Proof">Case Study 1: Hình ảnh số liệu</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="aspect-video bg-white/5 rounded-xl border border-white/10 overflow-hidden relative group">
        <img 
          src="https://picsum.photos/seed/analytics/800/450" 
          alt="Analytics" 
          className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="bg-black/80 px-4 py-2 rounded text-xs font-mono">GOOGLE ANALYTICS DASHBOARD</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {[
          { label: "Traffic tăng", value: "180%", color: "text-blue-400" },
          { label: "Conversion tăng", value: "45%", color: "text-green-400" },
          { label: "Chi phí giảm", value: "38%", color: "text-red-400" },
        ].map((item, i) => (
          <div key={i} className="p-6 bg-white/5 rounded-xl border border-white/10 flex justify-between items-center">
            <span className="text-slate-400 font-medium">{item.label}</span>
            <span className={`text-3xl font-bold ${item.color}`}>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Slide9 = () => (
  <div className="max-w-5xl w-full">
    <SectionTitle subtitle="Organic Growth">Case Study 2: SEO Project</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
      <div className="space-y-6">
        <div className="p-6 bg-orange-500/10 rounded-2xl border-l-4 border-orange-500">
          <h4 className="text-white font-bold mb-2">Mục tiêu</h4>
          <p className="text-slate-400">Xây dựng hệ thống SEO bền vững, giảm phụ thuộc vào quảng cáo trả phí.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {["Keyword cluster", "Content pillar", "Onpage chuẩn", "Backlink chất lượng"].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-orange-500" />
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white/5 p-8 rounded-3xl border border-white/10 relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <div className="text-center">
            <div className="text-5xl font-bold text-orange-500 mb-2">120+</div>
            <div className="text-sm text-slate-400 uppercase tracking-widest">Từ khóa Top 10</div>
          </div>
          <div className="h-px bg-white/10" />
          <div className="flex justify-around">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">400%</div>
              <div className="text-xs text-slate-500">Traffic tăng</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">2.5x</div>
              <div className="text-xs text-slate-500">Lead tự nhiên</div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/10 blur-3xl rounded-full" />
      </div>
    </div>
  </div>
);

const Slide10 = () => (
  <div className="max-w-5xl w-full">
    <SectionTitle subtitle="Paid Media">Performance Marketing</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <div className="md:col-span-2 p-8 bg-white/5 rounded-2xl border border-white/10">
        <h4 className="text-slate-400 mb-6 uppercase text-xs font-bold tracking-widest">Kênh triển khai</h4>
        <div className="flex flex-wrap gap-4">
          {["Facebook", "Google", "YouTube", "TikTok", "Zalo"].map((k, i) => (
            <span key={i} className="px-6 py-3 bg-white/10 rounded-full text-white font-medium border border-white/10">
              {k}
            </span>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-slate-500 text-xs mb-1">CPA</div>
            <div className="text-2xl font-bold text-red-400">-25%</div>
          </div>
          <div className="text-center">
            <div className="text-slate-500 text-xs mb-1">ROAS</div>
            <div className="text-2xl font-bold text-green-400">+40%</div>
          </div>
          <div className="text-center">
            <div className="text-slate-500 text-xs mb-1">Conv. Rate</div>
            <div className="text-2xl font-bold text-blue-400">+15%</div>
          </div>
        </div>
      </div>
      <div className="p-8 bg-orange-500 rounded-2xl flex flex-col justify-center text-slate-900">
        <div className="text-sm font-bold uppercase mb-2 opacity-70">Ngân sách quản lý</div>
        <div className="text-4xl font-black mb-4">500M - 2B</div>
        <div className="text-sm font-medium">VNĐ / Tháng</div>
      </div>
    </div>
  </div>
);

const Slide11 = () => (
  <div className="max-w-5xl w-full">
    <SectionTitle subtitle="Management">Team Leadership</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div className="space-y-4">
        {[
          "Xây dựng team từ 0 → 15 người",
          "Phân công KPI rõ ràng & đo lường",
          "Họp báo cáo & tối ưu hàng tuần",
          "Đào tạo & phát triển nhân sự chuyên sâu"
        ].map((item, i) => (
          <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold">
              {i + 1}
            </div>
            <span className="text-slate-300">{item}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center p-8 bg-orange-500/5 rounded-3xl border border-orange-500/20">
        <Users className="w-16 h-16 text-orange-500 mb-6" />
        <div className="text-center">
          <div className="text-4xl font-bold text-white mb-2">+35%</div>
          <div className="text-slate-400">Tăng hiệu suất làm việc của team</div>
        </div>
        <div className="mt-8 flex gap-2">
          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Chuẩn hóa quy trình</span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">Giảm sai sót 90%</span>
        </div>
      </div>
    </div>
  </div>
);

const Slide12 = () => (
  <div className="max-w-5xl w-full">
    <SectionTitle subtitle="Finance">Budget Management</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
        <h4 className="text-orange-500 font-bold mb-6">Quy trình quản lý</h4>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500" />
            <p className="text-slate-300 text-sm">Lập kế hoạch ngân sách chi tiết theo quý/năm</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500" />
            <p className="text-slate-300 text-sm">Phân bổ chi phí linh hoạt theo hiệu suất thực tế</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500" />
            <p className="text-slate-300 text-sm">Cắt giảm triệt để các kênh kém hiệu quả</p>
          </li>
          <li className="flex items-start gap-3">
            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500" />
            <p className="text-slate-300 text-sm">Scale mạnh các kênh có ROAS cao</p>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <div className="p-6 bg-green-500/10 rounded-2xl border border-green-500/20 flex items-center gap-6">
          <div className="text-4xl font-bold text-green-400">20%</div>
          <div className="text-slate-400 text-sm">Tối ưu chi phí vận hành Marketing</div>
        </div>
        <div className="p-6 bg-blue-500/10 rounded-2xl border border-blue-500/20 flex items-center gap-6">
          <div className="text-4xl font-bold text-blue-400">15%</div>
          <div className="text-slate-400 text-sm">Tăng lợi nhuận biên trên mỗi đơn hàng</div>
        </div>
      </div>
    </div>
  </div>
);

const Slide13 = () => (
  <div className="max-w-5xl w-full">
    <SectionTitle subtitle="Intelligence">Data & Analytics</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
      <div>
        <h4 className="text-slate-500 uppercase text-xs font-bold tracking-widest mb-6">Công cụ sử dụng</h4>
        <div className="grid grid-cols-2 gap-3">
          {[
            "Google Analytics", "Search Console", "Google Ads", 
            "FB Ads Manager", "Keyword Planner", "Ahrefs"
          ].map((tool, i) => (
            <div key={i} className="px-4 py-3 bg-white/5 rounded-lg border border-white/10 text-slate-300 text-sm flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              {tool}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="p-8 bg-orange-500/5 rounded-3xl border border-orange-500/20 relative">
          <h4 className="text-white font-bold mb-8 text-center">Tư duy phân tích</h4>
          <div className="flex items-center justify-between">
            {["Data", "Insight", "Strategy", "Optimize"].map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-slate-900 font-bold">
                    {i + 1}
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-500">{step}</span>
                </div>
                {i < 3 && <ArrowRight className="w-4 h-4 text-slate-700" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide14 = () => (
  <div className="max-w-5xl w-full">
    <SectionTitle subtitle="Identity">Brand Development</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div className="space-y-4">
        {[
          { t: "Định vị thương hiệu", d: "Xác lập giá trị cốt lõi và USP" },
          { t: "Xây dựng hình ảnh online", d: "Đồng bộ hóa nhận diện trên mọi nền tảng" },
          { t: "Phát triển social media", d: "Tăng tương tác và lòng trung thành" },
          { t: "Tăng Brand Search", d: "Thúc đẩy khách hàng chủ động tìm kiếm" }
        ].map((item, i) => (
          <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10">
            <h5 className="text-orange-500 font-bold text-sm mb-1">{item.t}</h5>
            <p className="text-slate-400 text-xs">{item.d}</p>
          </div>
        ))}
      </div>
      <div className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col justify-center items-center text-center">
        <Award className="w-16 h-16 text-orange-500 mb-6" />
        <div className="text-4xl font-bold text-white mb-2">+60%</div>
        <div className="text-slate-400">Tăng trưởng Brand Search Volume</div>
        <p className="mt-4 text-sm text-slate-500 italic">"Nhận diện thương hiệu tăng rõ rệt qua các chỉ số thảo luận tự nhiên"</p>
      </div>
    </div>
  </div>
);

const Slide15 = () => (
  <div className="max-w-5xl w-full">
    <SectionTitle subtitle="Experience">Website & Conversion</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div className="aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
        <img 
          src="https://picsum.photos/seed/web/800/450" 
          alt="Website Design" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col justify-center space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {["Thiết kế website", "Tối ưu UI/UX", "Tối ưu tốc độ", "Tối ưu chuyển đổi"].map((item, i) => (
            <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
              <span className="text-slate-300 font-medium">{item}</span>
            </div>
          ))}
        </div>
        <div className="p-6 bg-orange-500 rounded-2xl text-slate-900 text-center">
          <div className="text-sm font-bold uppercase opacity-70">Conversion Rate</div>
          <div className="text-4xl font-black">+4.2%</div>
          <div className="text-xs font-medium mt-1">Tăng trưởng sau khi tối ưu UX</div>
        </div>
      </div>
    </div>
  </div>
);

const Slide16 = () => (
  <div className="max-w-4xl w-full text-center">
    <SectionTitle subtitle="Vision">Long-term Strategy Thinking</SectionTitle>
    <div className="mt-12 space-y-8">
      <p className="text-2xl text-slate-400 italic">"Marketing không chỉ là kết quả 1 tháng."</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {[
          { t: "Hệ thống SEO 12 tháng", d: "Tạo dòng traffic tự nhiên bền vững" },
          { t: "Hệ thống Remarketing", d: "Bám đuổi và chuyển đổi khách hàng tiềm năng" },
          { t: "Data Khách Hàng", d: "Xây dựng tài sản số để tái khai thác trọn đời" }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-orange-500/50 transition-colors">
            <h4 className="text-orange-500 font-bold mb-4">{item.t}</h4>
            <p className="text-slate-400 text-sm">{item.d}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Slide17 = () => (
  <div className="max-w-5xl w-full">
    <SectionTitle subtitle="Milestones">Key Achievements</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {[
        { t: "Quản lý ngân sách 10+ tỷ/năm", i: PieChart },
        { t: "Tăng doanh thu trung bình 150%", i: TrendingUp },
        { t: "Phát triển 50+ dự án thành công", i: Layers },
        { t: "Xây dựng team 15+ nhân sự", i: Users }
      ].map((item, i) => (
        <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-6 group hover:bg-orange-500/10 transition-all">
          <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
            <item.i className="w-7 h-7" />
          </div>
          <span className="text-xl font-bold text-white">{item.t}</span>
        </div>
      ))}
    </div>
  </div>
);

const Slide18 = () => (
  <div className="max-w-4xl w-full">
    <SectionTitle subtitle="Value Proposition">Why Hire Me</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <div className="space-y-6">
        {[
          { t: "Tư duy hệ thống", d: "Không làm rời rạc, mọi thứ phải kết nối" },
          { t: "Tư duy tăng trưởng", d: "Luôn tìm cách scale và tối ưu" }
        ].map((item, i) => (
          <div key={i} className="p-6 bg-white/5 rounded-2xl border-l-4 border-orange-500">
            <h4 className="text-white font-bold mb-2">{item.t}</h4>
            <p className="text-slate-400 text-sm">{item.d}</p>
          </div>
        ))}
      </div>
      <div className="space-y-6">
        {[
          { t: "Tập trung vào lợi nhuận", d: "Số liệu cuối cùng là doanh thu & ROI" },
          { t: "Chủ động - Trách nhiệm", d: "Làm chủ chiến dịch, cam kết kết quả" }
        ].map((item, i) => (
          <div key={i} className="p-6 bg-white/5 rounded-2xl border-l-4 border-orange-500">
            <h4 className="text-white font-bold mb-2">{item.t}</h4>
            <p className="text-slate-400 text-sm">{item.d}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Slide19 = () => (
  <div className="max-w-4xl w-full text-center">
    <SectionTitle subtitle="Roadmap">Future Vision</SectionTitle>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        "Xây dựng hệ thống Marketing bền vững",
        "Mở rộng quy mô doanh nghiệp",
        "Tăng trưởng dài hạn",
        "Đồng hành cùng công ty"
      ].map((goal, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="p-8 bg-orange-500/10 border border-orange-500/30 rounded-3xl"
        >
          <p className="text-xl font-bold text-white">{goal}</p>
        </motion.div>
      ))}
    </div>
    <p className="mt-12 text-slate-500 max-w-2xl mx-auto">
      Khát vọng trở thành một CMO chiến lược, dẫn dắt doanh nghiệp chinh phục những cột mốc doanh thu mới thông qua sức mạnh của dữ liệu và công nghệ.
    </p>
  </div>
);

const Slide20 = () => (
  <div className="max-w-4xl w-full text-center">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="mb-12"
    >
      <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">THANK <span className="text-orange-500">YOU</span></h2>
      <p className="text-xl text-slate-400">Sẵn sàng đồng hành để tạo tăng trưởng đột phá.</p>
    </motion.div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
      <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center gap-3">
        <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500">
          <Phone className="w-6 h-6" />
        </div>
        <span className="text-white font-medium">09xx xxx xxx</span>
      </div>
      <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center gap-3">
        <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500">
          <Mail className="w-6 h-6" />
        </div>
        <span className="text-white font-medium">hien.marketing@gmail.com</span>
      </div>
      <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center gap-3">
        <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500">
          <Linkedin className="w-6 h-6" />
        </div>
        <span className="text-white font-medium">linkedin.com/in/hien-marketing</span>
      </div>
    </div>

    <div className="mt-16">
      <h3 className="text-3xl font-display font-bold text-white">ĐOÀN ĐÌNH HIỂN</h3>
      <p className="text-orange-500 font-medium tracking-widest uppercase text-sm mt-2">Marketing Manager</p>
    </div>
  </div>
);

// --- Main App Component ---

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 20;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slides = [
    <Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />, <Slide5 />,
    <Slide6 />, <Slide7 />, <Slide8 />, <Slide9 />, <Slide10 />,
    <Slide11 />, <Slide12 />, <Slide13 />, <Slide14 />, <Slide15 />,
    <Slide16 />, <Slide17 />, <Slide18 />, <Slide19 />, <Slide20 />
  ];

  return (
    <div className="relative w-screen h-screen bg-[#0a0a0f] overflow-hidden font-sans selection:bg-orange-500 selection:text-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      {/* Header / Progress */}
      <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-slate-900 font-black text-xl">H</div>
          <div className="hidden md:block">
            <h1 className="text-white font-bold text-sm tracking-tight">ĐOÀN ĐÌNH HIỂN</h1>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Portfolio 2026</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <div 
                key={i} 
                className={`h-1 transition-all duration-300 rounded-full ${i === currentSlide ? 'w-8 bg-orange-500' : 'w-2 bg-white/10'}`}
              />
            ))}
          </div>
          <span className="text-xs font-mono text-slate-500">
            {String(currentSlide + 1).padStart(2, '0')} / {totalSlides}
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full h-full">
        {slides.map((slide, index) => (
          <SlideWrapper key={index} isActive={currentSlide === index}>
            {slide}
          </SlideWrapper>
        ))}
      </main>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8 z-50">
        <button 
          onClick={prevSlide}
          className="p-4 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-orange-500 hover:text-slate-900 hover:border-orange-500 transition-all group"
        >
          <ChevronLeft className="w-6 h-6 group-active:scale-90 transition-transform" />
        </button>
        
        <div className="hidden md:flex items-center gap-4 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
          <span>Use arrows to navigate</span>
        </div>

        <button 
          onClick={nextSlide}
          className="p-4 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-orange-500 hover:text-slate-900 hover:border-orange-500 transition-all group"
        >
          <ChevronRight className="w-6 h-6 group-active:scale-90 transition-transform" />
        </button>
      </div>

      {/* Footer Info */}
      <footer className="absolute bottom-6 right-8 hidden md:block z-50">
        <p className="text-[10px] text-slate-600 font-medium uppercase tracking-widest">
          Marketing Manager | Digital Growth Strategist
        </p>
      </footer>
    </div>
  );
}
