import React from 'react';
import styles from '@/style/pages/Privacy.module.css';

export default function Privacy() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>개인정보처리방침</h1>
          <p className={styles.subtitle}>
            (주)아이디블록은 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고자 다음과 같은 처리방침을 두고 있습니다.
          </p>
        </header>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>제1조 (개인정보의 처리 목적)</h2>
          <div className={styles.sectionContent}>
            <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
            
            <div className={styles.subsection}>
              <h3>1. 홈페이지 회원가입 및 관리</h3>
              <p>회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지, 고충처리 목적으로 개인정보를 처리합니다.</p>
            </div>

            <div className={styles.subsection}>
              <h3>2. 재화 또는 서비스 제공</h3>
              <p>서비스 제공, 계약서·청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금결제·정산, 채권추심 목적으로 개인정보를 처리합니다.</p>
            </div>

            <div className={styles.subsection}>
              <h3>3. 고충처리</h3>
              <p>민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 목적으로 개인정보를 처리합니다.</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>제2조 (개인정보의 처리 및 보유기간)</h2>
          <div className={styles.sectionContent}>
            <p>① 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
            
            <p>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
            
            <div className={styles.table}>
              <div className={styles.tableRow}>
                <div className={styles.tableCell}>
                  <strong>홈페이지 회원가입 및 관리</strong>
                  <p>홈페이지 회원가입 및 관리와 관련한 개인정보는 수집·이용에 관한 동의일로부터 회원탈퇴시까지 위 이용목적을 위하여 보유·이용됩니다.</p>
                  <p>보유근거: 정보주체의 동의</p>
                  <p>관련법령: 신용정보의 이용 및 보호에 관한 법률</p>
                  <p>예외사유: -</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>제3조 (개인정보의 제3자 제공)</h2>
          <div className={styles.sectionContent}>
            <p>① 회사는 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>
            
            <p>② 회사는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.</p>
            
            <div className={styles.providerInfo}>
              <h4>개인정보를 제공받는 자: (주)아이디블록</h4>
              <p><strong>제공받는 자의 개인정보 이용목적:</strong> 홈페이지 회원가입 및 관리, 재화 또는 서비스 제공</p>
              <p><strong>제공하는 개인정보 항목:</strong> 이메일, 비밀번호, 로그인ID, 휴대전화번호, 자택주소, 자택전화번호, 직장주소, 직장전화번호, 회사명</p>
              <p><strong>제공받는 자의 보유·이용기간:</strong> 회원탈퇴시</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>제4조 (개인정보처리의 위탁)</h2>
          <div className={styles.sectionContent}>
            <p>① 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
            
            <div className={styles.delegationInfo}>
              <h4>1. 홈페이지 회원가입 및 관리</h4>
              <p><strong>위탁받는 자(수탁자):</strong> (주)아이디블록</p>
              <p><strong>위탁하는 업무의 내용:</strong> 홈페이지 회원가입 및 관리, 재화 또는 서비스 제공</p>
              <p><strong>위탁기간:</strong> 회원탈퇴시</p>
            </div>
            
            <p>② 회사는 위탁계약 체결시 개인정보보호법 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.</p>
            
            <p>③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.</p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>제5조 (정보주체와 법정대리인의 권리·의무 및 그 행사방법)</h2>
          <div className={styles.sectionContent}>
            <p>① 정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.</p>
            
            <p>② 제1항에 따른 권리 행사는 회사에 대해 개인정보보호법 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.</p>
            
            <p>③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.</p>
            
            <p>④ 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.</p>
            
            <p>⑤ 개인정보의 정정·삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.</p>
            
            <p>⑥ 회사는 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.</p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>제6조 (처리하는 개인정보의 항목 작성)</h2>
          <div className={styles.sectionContent}>
            <p>① 회사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
            
            <div className={styles.subsection}>
              <h3>1. 홈페이지 회원가입 및 관리</h3>
              <p><strong>필수항목:</strong> 이메일, 비밀번호, 로그인ID, 휴대전화번호, 자택주소, 자택전화번호, 직장주소, 직장전화번호, 회사명</p>
              <p><strong>선택항목:</strong> 없음</p>
            </div>

            <div className={styles.subsection}>
              <h3>2. 재화 또는 서비스 제공</h3>
              <p><strong>필수항목:</strong> 이메일, 비밀번호, 로그인ID, 휴대전화번호, 자택주소, 자택전화번호, 직장주소, 직장전화번호, 회사명</p>
              <p><strong>선택항목:</strong> 없음</p>
            </div>

            <div className={styles.subsection}>
              <h3>3. 인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다.</h3>
              <p>IP주소, 쿠키, MAC주소, 서비스 이용 기록, 방문 기록, 불량 이용 기록 등</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>제7조 (개인정보의 파기)</h2>
          <div className={styles.sectionContent}>
            <p>① 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
            
            <p>② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.</p>
            
            <p>③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.</p>
            
            <div className={styles.subsection}>
              <h4>1. 파기절차</h4>
              <p>회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.</p>
            </div>

            <div className={styles.subsection}>
              <h4>2. 파기방법</h4>
              <p>전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.</p>
              <p>종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>제8조 (개인정보의 안전성 확보 조치)</h2>
          <div className={styles.sectionContent}>
            <p>회사는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.</p>
            
            <div className={styles.subsection}>
              <h3>1. 정기적인 자체 감사</h3>
              <p>개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.</p>
            </div>

            <div className={styles.subsection}>
              <h3>2. 개인정보 취급 직원의 최소화 및 교육</h3>
              <p>개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.</p>
            </div>

            <div className={styles.subsection}>
              <h3>3. 내부관리계획의 수립 및 시행</h3>
              <p>개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.</p>
            </div>

            <div className={styles.subsection}>
              <h3>4. 해킹 등에 대비한 기술적 대책</h3>
              <p>회사는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.</p>
            </div>

            <div className={styles.subsection}>
              <h3>5. 개인정보의 암호화</h3>
              <p>이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.</p>
            </div>

            <div className={styles.subsection}>
              <h3>6. 접속기록의 보관 및 위변조 방지</h3>
              <p>개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관, 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능 사용하고 있습니다.</p>
            </div>

            <div className={styles.subsection}>
              <h3>7. 개인정보에 대한 접근 제한</h3>
              <p>개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.</p>
            </div>

            <div className={styles.subsection}>
              <h3>8. 문서보안을 위한 잠금장치 사용</h3>
              <p>개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>제9조 (개인정보 보호책임자)</h2>
          <div className={styles.sectionContent}>
            <p>① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
            
            <div className={styles.contactInfo}>
              <h4>▶ 개인정보 보호책임자</h4>
              <p><strong>성명:</strong> 이경원</p>
              <p><strong>직책:</strong> 대표이사</p>
              <p><strong>직급:</strong> 대표이사</p>
              <p><strong>연락처:</strong> 010-4214-4000, lkw@idblock.co, 010-4214-4000</p>
              <p>※ 개인정보 보호 담당부서로 연결됩니다.</p>
            </div>

            <div className={styles.contactInfo}>
              <h4>▶ 개인정보 보호 담당부서</h4>
              <p><strong>부서명:</strong> 개발팀</p>
              <p><strong>담당자:</strong> 이경원</p>
              <p><strong>연락처:</strong> 010-4214-4000, lkw@idblock.co, 010-4214-4000</p>
            </div>
            
            <p>② 정보주체께서는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.</p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>제10조 (개인정보 처리방침 변경)</h2>
          <div className={styles.sectionContent}>
            <p>① 이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>제11조 (개인정보의 열람청구)</h2>
          <div className={styles.sectionContent}>
            <p>정보주체는 개인정보보호법 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 회사는 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.</p>
            
            <div className={styles.contactInfo}>
              <h4>▶ 개인정보 열람청구 접수·처리 부서</h4>
              <p><strong>부서명:</strong> 개발팀</p>
              <p><strong>담당자:</strong> 이경원</p>
              <p><strong>연락처:</strong> 010-4214-4000, lkw@idblock.co, 010-4214-4000</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>제12조 (권익침해 구제방법)</h2>
          <div className={styles.sectionContent}>
            <p>정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.</p>
            
            <div className={styles.agencyInfo}>
              <div className={styles.agency}>
                <h4>1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)</h4>
              </div>
              
              <div className={styles.agency}>
                <h4>2. 개인정보침해신고센터 : (국번없이) privacy.go.kr</h4>
              </div>
              
              <div className={styles.agency}>
                <h4>3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr)</h4>
              </div>
              
              <div className={styles.agency}>
                <h4>4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)</h4>
              </div>
            </div>
            
            <p>「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.</p>
            
            <p>※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.</p>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.effectiveDate}>
            <p><strong>이 개인정보처리방침은 2024년 11월 5일부터 적용됩니다.</strong></p>
          </div>
        </footer>
      </div>
    </div>
  );
}