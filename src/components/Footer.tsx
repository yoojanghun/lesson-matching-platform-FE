import { Music } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a1206] text-[#f6e9c9] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Music className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-white">레슨매치</span>
            </div>
            <p className="text-sm text-[#e6d3a8]">
              전문 강사와 학생을 연결하는<br />악기 레슨 매칭 플랫폼
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">레슨 찾기</a></li>
              <li><a href="#" className="hover:text-white transition-colors">강사 등록</a></li>
              <li><a href="#" className="hover:text-white transition-colors">이용 방법</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">고객지원</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">공지사항</a></li>
              <li><a href="#" className="hover:text-white transition-colors">자주 묻는 질문</a></li>
              <li><a href="#" className="hover:text-white transition-colors">문의하기</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">약관</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
              <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          © 2026 레슨매치. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
