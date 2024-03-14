import Image from "next/image";

async function getSongs() {
  const res = await fetch('http://localhost:4000/songs', {
    next: {
      revalidate: 30
      // refresh data after 30s
    }
  });
  return res.json();
}

export default async function Gallery() {
  type Song = {
    id: number;
    title: string;
    videolink: string;
    thumbnail: string;
    copyright: string;
    ownerlink: string;
  }
  
  const songs = await getSongs();
  
  return (
    <div id='results-gallery' className='w-full max-w-screen-2xl flex flex-col justify-center items-center px-6 md:px-6 py-8 md:py-16 xl:py-12'>
      <div id="gallery-grid" className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-8'>

        {songs.map((song:Song) => (
          <div key={song.id} className="flex flex-row md:flex-col gap-2 md:gap-4 mb-4 md:mb-8">
           <div className='flex w-1/5 flex-shrink-0 h-fit md:w-full justify-center items-center rounded-none md:rounded-lg bg-slate-200 aspect-video text-slate-400 relative overflow-hidden hover:opacity-80 transition duration-300 shadow-md'>
            <a href={song.videolink} target="_blank">
              <Image 
                src={song.thumbnail}
                width={750}
                height={422}
                alt={song.title}
                className="saturate-50"
              />
            </a>
           </div>
           <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-0 md:gap-4 items center px-4 md:px-0">
            <h3 className="tex text-sm font-semibold">{song.title}</h3>
            <p className="text-left text-sm text-slate-700 w-fit">{song.copyright}</p>
           </div>
          </div>
        ))}
        
       
        
      </div>
    </div>
  )
}