export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">فروشگاه پریسا</h1>
        <p className="text-xl mt-2">بهترین محصولات با بهترین قیمت</p>
      </header>

      <main className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold">لپ‌تاپ گیمینگ</h3>
          <p className="text-gray-600 mt-2">۲۵,۰۰۰,۰۰۰ تومان</p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            افزودن به سبد
          </button>
        </div>
      </main>
    </div>
  );
}# ecommerce-nextjs
فروشگاه آنلاین با Next.js
