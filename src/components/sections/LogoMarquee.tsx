import Image from 'next/image'

const logos = [
  { name: 'Coca-Cola', file: 'Coca-Cola_logo.svg.png' },
  { name: 'Heineken', file: 'Heineken_logo.svg.png' },
  { name: 'Vodafone', file: 'Vodafone.svg.png' },
  { name: 'Orange', file: 'Orange_logo.svg.png' },
  { name: 'Ericsson', file: 'Ericsson-Logo.wine.png' },
  { name: 'DHL', file: 'DHL_Logo.svg.png' },
  { name: 'BRD', file: 'BRD_logo.svg.png' },
  { name: 'Marriott', file: 'Marriott_Logo.svg.png' },
  { name: 'H&M', file: 'HM_logo.png' },
  { name: 'Huawei', file: 'Huawei-Logo-2006.png' },
  { name: 'Raiffeisen', file: 'logo raiffeisen.png' },
  { name: 'EY', file: 'EY_Logo_Beam_STFWC_Horizontal_Large_RGB_OffBlack_Yellow_EN.png' },
  { name: 'Antena 1', file: 'Antena_1_Logo_(2022-present).svg.png' },
  { name: 'Digi', file: 'Digi_Logo.png' },
  { name: 'eMag', file: 'Logo emag.png' },
  { name: 'MSD', file: '02852_MSD_Logo_Horizontal_Teal&Grey_RGB.png' },
]

export function LogoMarquee() {
  return (
    <section className="py-10 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-pp-muted">
          De incredere pentru branduri mari
        </p>
      </div>
      <p className="text-center text-sm text-pp-muted font-medium mb-6">
        Peste 200 de branduri au ales PartyPixel
      </p>
      <div className="relative">
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 mx-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-10 w-24 relative flex items-center justify-center">
                <Image
                  src={`/media/logos/${logo.file}`}
                  alt={logo.name}
                  width={96}
                  height={40}
                  className="object-contain h-10 w-auto max-w-[96px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
