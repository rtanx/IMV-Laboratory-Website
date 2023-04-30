import Link from "next/link";

const MainSection = () => {
  return (
    <div className="px-4 py-8 w-full">
      <h1 className="text-2xl text-center font-bold">Blog Post</h1>

      <div className="flex flex-row mt-12">
        <div className="flex-none w-[405px] h-[269px] rounded-lg m-4">
          <img src="https://cdn.stealthoptional.com/images/ncavvykf/stealth/9d45b038446e5940c035e5bd79d2c1ae3bd4a875-750x374.png?rect=1,0,748,374&w=1200&h=600&auto=format" className="rounded-lg" />
        </div>
        <div className="m-4">
          <h2 className="text-xl text-left font-bold">Pengembangan Stable Diffusion Model Untuk Mempercepat Pembuatan Anime dengan Video to Video Style Convertion</h2>
          <p className="text-blue-500">Tags</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Aliquet lorem sapien non quis dolor placerat. Nisl gravida ultricies nibh libero quis tincidunt blandit. Libero lorem tortor scelerisque cras consequat integer ipsum scelerisque eu.
            Tincidunt viverra venenatis at viverra ut habitant. Ullamcorper in nam tempus nisl amet. Ultricies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
