export default function ProductPage() {
  return (
    <main className="pt-32 pb-24 md:pt-48">
      <div className="max-w-[1920px] mx-auto px-8 md:px-20">
        {/* Breadcrumb */}
        <nav className="mb-12">
          <ol className="flex items-center gap-2 text-[0.6875rem] uppercase tracking-[0.1rem] text-on-surface-variant">
            <li className="">
              <a className="hover:text-secondary transition-colors" href="#">
                Collections
              </a>
            </li>
            <li className="material-symbols-outlined text-[10px] leading-none">
              chevron_right
            </li>
            <li className="">
              <a className="hover:text-secondary transition-colors" href="#">
                Seating
              </a>
            </li>
            <li className="material-symbols-outlined text-[10px] leading-none">
              chevron_right
            </li>
            <li className="text-on-surface">Serpentine Chair</li>
          </ol>
        </nav>
        {/* Hero Layout: 60/40 Split */}
        <div className="grid md:grid-cols-12 gap-16 md:gap-24">
          <div className="md:col-span-7 flex flex-col gap-8 ">
            <div className="bg-surface-container-low w-full overflow-hidden">
              <img
                alt="Serpentine Chair Main View"
                className="w-full h-full object-cover"
                data-alt="Minimalist wooden chair with curved silhouette on light background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1jSUEAgUAgzCsQGFfmaoHnx-XrriKxxkWELDCR9zBLiBB4wHT9-g1tiZXfxjtfBu-xeEdmmvJoG34lumd-4-9jkQXYjTLzAePe5DSyYmW7jwcb8PpszXFJIIppDKbDZJCwfQjd-31VfCvIwlqXV6pEV6wuAbc9eJ5hHNrR7J3tfTYaw3Olbnore_wBoYL8_WUhkNYivuKNpY4eXrFyIOs_iPdTUkz5AvXqbcM3cPb7GCGPGmgdPQ1b_xIXTLjRK6sEab3Nwk7AKY"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex flex-row gap-4">
              <div className="relative bg-surface-container-low w-56 h-60 cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0 flex-grow-0">
                <img
                  alt="Thumbnail 1"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuADDt1fLUzner5uGu5wsyt_DXrkMYnxWTgzVUtx4hLtkdBMnZEQFou1Rrqv3bmPxX4znZun7JWXqT3HAjfMSgbTMvIDsbT8rcZ_rJhLZCUk_X0gTWjVjHiHvgHMjFGZU66RJeD_j7_Jv0Os34kfnW7ZkIahcpPNydiJ7dgq9q10N3nsrig8vHs19aUpPwMquanBP9yNF_7Kt2Nxd-OINsFmalHudJ7EMV0at2ijPbUqLub6M2z6Fy3ElYChLa3PvqcLb0tMjq28h6E"
                />
              </div>
              <div className="relative bg-surface-container-low w-56 h-60  cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0 flex-grow-0">
                <img
                  alt="Thumbnail 2"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaKwPdbye6ZFJkeSwWDIRLZj63SXA0IfoSOYIesZmIUD8v9afZj2MGGxRzLe0r09lKrpxo9TR-Sf6G9CaDGqZfVncaz8HW59Ph91xm6VTc5bH-Ov305RweioC4KWd52OBSsiXAZhMbuLww_NA5ZcogThGvzdktpOav_7ARK7dLoAs0_VWlnFNt-OrFI80V9CwwHNSwVwYEQyN6nzBRHf94Vxneeh_nkKFahIQeuhirHYx6zF5_IEaVUZxwKMe5ckHjIFTxnpl9Aeg"
                />
              </div>
              <div className="relative bg-surface-container-low w-50 h-60  cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0 flex-grow-0">
                <img
                  alt="Thumbnail 3"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR_h9cYsLa9CqnRz0ynykqind02dcxDHnvdvJ94bCFID7G_emSEzs-Rkn4ZJgi2RIZGre_k2hpZwiRxEUIdr9opN3UjjQirhSDDEcKwlmMnx86j8TjsOaEqm8cPVuFylbweU-HzD9IBrEW3TxfRVmwlakDXDx-joszeB1jDJOZq5xkUAUjHfoK7-A6nobgPFacZPCwDnHjE6oxmJoB-oHsnD20J32kva_ig05ziQFd34NX1Uu3dRAO56IoLux_S2KPO2bgffQ1FC8"
                />
              </div>
              <div className="relative bg-surface-container-low w-56 h-60  cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0 flex-grow-0">
                <img
                  alt="Thumbnail 4"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZbUAFY0sIQYP23nSczW1ES7Q9mZRl_v7-fLO55R_JtjS2iuQG9lho8mFbaSSwhPbZdrIqDEI0yd9jNcWg65InKb_dhpWFbJihW1gfpBarQM-b-fiNgRB_8hZkkliSFDVsIC3MpuqU1s77JNtUcHIPNaGkZNF6m1NlanZyHzmJ_SylCv32nz9HXFbdz1iPW2CXLX-VsXgjBFq0gO3wsi5IY4-M0iLGc-pZSrQq6AMX96aTtZy_iAEiHfZn8sbaTz1XdD7WZ9akKQI"
                />
              </div>
            </div>
          </div>
          {/* RIGHT: Details (40%) */}
          <div className="md:col-span-5 flex flex-col pt-4">
            <span className="text-[0.6875rem] uppercase tracking-[0.25rem] text-on-surface-variant mb-4">
              Seating Collection
            </span>
            <h1 className="text-5xl md:text-6xl font-headline font-normal text-on-surface mb-2 tracking-tight">
              Serpentine Chair
            </h1>
            <p className="text-xl font-headline italic text-on-surface-variant mb-6">
              A sculptural full-wood silhouette
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex text-secondary">
                <span className="material-symbols-outlined stars-fill">
                  star
                </span>
                <span className="material-symbols-outlined stars-fill">
                  star
                </span>
                <span className="material-symbols-outlined stars-fill">
                  star
                </span>
                <span className="material-symbols-outlined stars-fill">
                  star
                </span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <span className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant">
                24 Reviews
              </span>
            </div>

            <p className="text-5xl font-light text-on-surface mb-8 tracking-wider">
              $1,280
            </p>

            <div className="h-[1px] w-full bg-outline-variant/20 mb-8"></div>
            <p className="text-base font-body text-on-surface-variant leading-relaxed mb-12 max-w-md">
              The Serpentine Chair is a testament to fluid geometry and
              traditional woodworking. Carved from solid European oak, its
              continuous lines evoke a sense of organic motion, balancing weight
              and lightness through a masterfully engineered frame that honors
              decades of artisanal heritage.
            </p>
            {/* CTAs */}
            <div className="flex flex-col gap-4">
              <button className="border border-outline-variant/30 text-on-surface py-5 px-10 text-[0.6875rem] uppercase tracking-[0.2rem] font-medium hover:bg-surface-container-low transition-all duration-300">
                Bespoke Enquiry
              </button>
              <button className="border bg-on-surface/90 border-outline-variant/30 text-white py-5 px-10 text-[0.6875rem] uppercase tracking-[0.2rem] font-medium hover:bg-on-surface transition-all duration-300">
                Add to Bag
              </button>
            </div>
            {/* Additional Product Info */}
            <div className="mt-16 grid grid-cols-1 gap-6 border-t border-outline-variant/20 pt-8">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-[0.6875rem] uppercase tracking-widest font-semibold">
                    Dimensions &amp; Materials
                  </span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="pt-4 text-sm text-on-surface-variant leading-relaxed">
                  Height: 82cm | Width: 48cm | Depth: 52cm
                  <br />
                  Material: Solid European Oak with Natural Oil Finish.
                </div>
              </details>
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-[0.6875rem] uppercase tracking-widest font-semibold">
                    Sustainability
                  </span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="pt-4 text-sm text-on-surface-variant leading-relaxed">
                  Sourced from FSC certified forests. For every chair crafted,
                  five saplings are planted in our native woodland initiative.
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
      {/* Product Recommendations Section */}
    </main>
  );
}
