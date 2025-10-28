'use client'

export default function Venue() {
  return (
    <section className="bg-white">
      <div className="bg-[#fdd14aff] max-w-[800px] mx-auto px-4 py-8">
        <div className="flex justify-center mb-8">
          <h2 className="text-3xl font-bold" style={{ fontFamily: 'Noto Sans JP', color: '#8f8279ff' }}>
            会場
          </h2>
        </div>
        
        <div className="max-w-[640px] mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Noto Sans JP', color: '#604c3fff' }}>
                札幌サンプラザ３階セミナールーム
              </h3>
              <div className="space-y-2">
                <p className="text-lg leading-relaxed" style={{ fontFamily: 'Noto Sans JP', color: '#8f8279ff' }}>
                  <span className="font-semibold">住所：</span>札幌市北区北24条西5丁目
                </p>
                <p className="text-base leading-relaxed" style={{ fontFamily: 'Noto Sans JP', color: '#8f8279ff' }}>
                  地下鉄南北線「北２４条駅」１番出口から出て西へ２００ｍ(３分)ほど歩くとございます。
                </p>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'Noto Sans JP', color: '#8f8279ff' }}>
                  ※駐車場は建物西口が出入口となります。（有料）
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3" style={{ fontFamily: 'Noto Sans JP', color: '#604c3fff' }}>
                MAP
              </h4>
              <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.6550595336503!2d141.33948927614722!3d43.09074677113439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b28e13745862b%3A0x6691633ab19a8cbf!2z5pyt5bmM44K144Oz44OX44Op44K2!5e0!3m2!1sja!2sjp!4v1761637047097!5m2!1sja!2sjp" 
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

