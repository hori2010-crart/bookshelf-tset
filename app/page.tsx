export default function CustomBookshelfHomepage() {
  const benefits = [
    {
      title: "우리집에 딱 맞는 사이즈",
      desc: "가로, 세로, 깊이를 공간에 맞게 선택해 애매한 빈틈 없이 제작합니다.",
    },
    {
      title: "주문 후 제작",
      desc: "재고를 쌓아두지 않고 주문 정보를 기준으로 제작해 불필요한 낭비를 줄입니다.",
    },
    {
      title: "실제 공방 제작",
      desc: "디지털 설계와 공방 제작을 결합해 맞춤형 가구를 보다 현실적인 방식으로 제공합니다.",
    },
  ];

  const process = [
    "원하는 디자인과 사이즈 입력",
    "주문 내용 확인 및 제작 도면 정리",
    "공방 제작 진행",
    "완성 후 배송 및 설치 안내",
  ];

  const faqs = [
    {
      q: "사이즈는 어떻게 주문하나요?",
      a: "희망하는 가로, 세로, 깊이를 입력하면 주문 내용을 확인한 뒤 제작 가능 여부와 세부 사항을 안내합니다.",
    },
    {
      q: "제작 기간은 얼마나 걸리나요?",
      a: "기본적으로 주문 확정 후 약 2~3주를 예상합니다. 사이즈와 사양에 따라 달라질 수 있습니다.",
    },
    {
      q: "가격은 어떻게 정해지나요?",
      a: "기본 가격을 기준으로 하되, 사이즈와 옵션에 따라 추가 비용이 반영될 수 있습니다.",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-lg font-semibold tracking-tight">맞춤 책장</div>
            <div className="text-xs text-stone-500">사이즈 맞춤 제작 서비스</div>
          </div>
          <nav className="hidden gap-6 text-sm text-stone-600 md:flex">
            <a href="#benefits" className="hover:text-stone-900">특징</a>
            <a href="#process" className="hover:text-stone-900">주문 방법</a>
            <a href="#faq" className="hover:text-stone-900">자주 묻는 질문</a>
          </nav>
          <a
            href="#order"
            className="rounded-2xl bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
          >
            주문 문의
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit rounded-full border border-stone-300 bg-white px-3 py-1 text-xs text-stone-600">
              공간에 맞춰 제작하는 사이즈 맞춤 책장
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              우리집에 딱 맞는
              <br />
              사이즈 책장
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-stone-600 md:text-lg">
              기성 책장이 애매하게 남기는 공간을 줄이고, 원하는 크기에 맞춰 제작하는 주문형 책장 서비스입니다.
              복잡한 상담보다 먼저, 필요한 사이즈를 기준으로 간단하게 문의하고 제작을 시작할 수 있습니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#order"
                className="rounded-2xl bg-stone-900 px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                사이즈 입력하고 문의하기
              </a>
              <a
                href="#process"
                className="rounded-2xl border border-stone-300 bg-white px-6 py-3 text-center text-sm font-medium text-stone-800 transition hover:bg-stone-100"
              >
                주문 방법 보기
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
              <div>
                <div className="text-2xl font-semibold">맞춤</div>
                <div className="mt-1 text-sm text-stone-500">가로·세로·깊이 선택</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">공방</div>
                <div className="mt-1 text-sm text-stone-500">주문 후 제작</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">간단</div>
                <div className="mt-1 text-sm text-stone-500">문의 기반 진행</div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[2rem] border border-stone-200 bg-white p-6 shadow-lg md:p-8">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-stone-100 to-amber-50 p-6">
                <div className="mb-5 text-sm font-medium text-stone-600">예시 주문 카드</div>
                <div className="grid gap-4 rounded-3xl bg-white p-5 shadow-sm">
                  <div>
                    <div className="text-sm text-stone-500">제품</div>
                    <div className="mt-1 text-lg font-semibold">사이즈 맞춤 책장</div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-stone-50 p-4">
                      <div className="text-xs text-stone-500">가로</div>
                      <div className="mt-1 text-lg font-semibold">900mm</div>
                    </div>
                    <div className="rounded-2xl bg-stone-50 p-4">
                      <div className="text-xs text-stone-500">세로</div>
                      <div className="mt-1 text-lg font-semibold">1800mm</div>
                    </div>
                    <div className="rounded-2xl bg-stone-50 p-4">
                      <div className="text-xs text-stone-500">깊이</div>
                      <div className="mt-1 text-lg font-semibold">280mm</div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-dashed border-stone-300 p-4 text-sm leading-6 text-stone-600">
                    원하는 공간에 맞춰 사이즈를 입력하면 주문 내용을 검토한 뒤 제작 가능 여부와 예상 일정을 안내합니다.
                  </div>
                  <a
                    href="#order"
                    className="rounded-2xl bg-stone-900 px-4 py-3 text-center text-sm font-medium text-white transition hover:opacity-90"
                  >
                    주문 문의 시작하기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="border-y border-stone-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="max-w-2xl">
              <div className="text-sm font-medium text-stone-500">왜 필요한가</div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                기성 가구의 애매함을 줄이는 방식
              </h2>
              <p className="mt-4 text-base leading-7 text-stone-600">
                공간에 안 맞는 기성 가구와, 절차가 복잡한 전통적 주문제작 사이의 간극을 줄이는 데 초점을 둡니다.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {benefits.map((item) => (
                <div key={item.title} className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm font-medium text-stone-500">주문 방법</div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                복잡한 과정 없이, 필요한 정보부터
              </h2>
              <p className="mt-4 text-base leading-7 text-stone-600">
                초기에는 자동 견적보다 간단한 주문 문의 방식을 우선 적용해 실제 고객 반응과 제작 과정을 검증합니다.
              </p>
            </div>
            <div className="grid gap-4">
              {process.map((step, index) => (
                <div key={step} className="flex items-start gap-4 rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <div className="pt-1 text-base font-medium text-stone-800">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="order" className="bg-stone-900 text-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:items-center md:py-20">
            <div>
              <div className="text-sm font-medium text-stone-300">주문 문의</div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                먼저 사이즈를 남겨주세요
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-stone-300">
                원하는 책장 크기와 설치 공간 정보를 남겨주시면 제작 가능 여부, 예상 일정, 상세 진행 방법을 안내합니다.
              </p>
            </div>
            <form className="rounded-[2rem] bg-white p-6 text-stone-900 shadow-xl md:p-8">
              <div className="grid gap-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">이름</label>
                  <input className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none ring-0 transition focus:border-stone-900" placeholder="홍길동" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">연락처</label>
                  <input className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none ring-0 transition focus:border-stone-900" placeholder="010-0000-0000" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="mb-2 block text-sm font-medium">가로(mm)</label>
                    <input className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-900" placeholder="900" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">세로(mm)</label>
                    <input className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-900" placeholder="1800" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">깊이(mm)</label>
                    <input className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-900" placeholder="280" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">추가 요청사항</label>
                  <textarea className="min-h-[120px] w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none transition focus:border-stone-900" placeholder="설치 공간, 원하는 분위기, 참고사항 등을 적어주세요." />
                </div>
                <button type="button" className="rounded-2xl bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90">
                  문의 보내기
                </button>
                <p className="text-xs leading-5 text-stone-500">
                  현재 페이지는 초기 검증용 예시입니다. 실제 운영 시 카카오톡, 네이버 폼, 스마트스토어 등 원하는 방식으로 연결할 수 있습니다.
                </p>
              </div>
            </form>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-2xl">
            <div className="text-sm font-medium text-stone-500">FAQ</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">자주 묻는 질문</h2>
          </div>
          <div className="mt-10 grid gap-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
                <div className="text-lg font-semibold">{item.q}</div>
                <div className="mt-3 text-sm leading-6 text-stone-600">{item.a}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
