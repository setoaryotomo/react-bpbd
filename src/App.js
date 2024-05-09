import './Style.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Kontak />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header id="header" className="header fixed-top" style={{ backgroundColor: 'black' }}>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="#" className="logo d-flex align-items-center">
          <img src="images/logo-navbar.png" alt=""></img>

        </a>
        <nav id="navbar" className="navbar">
          <ul>
            <li className="dropdown"><a
              style={{ color: 'white' }}
              href="#"><span>Profil</span>
              <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li>
                  <a href="#" className="text-dark">Profil Badan</a>
                  <a href="#" className="text-dark">Profil Pejabat</a>
                  <a href="#" className="text-dark">Visi dan Misi</a>
                </li>
              </ul>
            </li>
            <li className="dropdown"><a
              style={{ color: 'white' }}
              href="#"><span>Informasi Publik</span>
              <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li>
                  <a href="#" className="text-dark">PPID</a>
                  <a href="#" className="text-dark">Daftar Informasi</a>
                  <a href="#" className="text-dark">Informasi Wajib
                    Berkala</a>
                  <a href="#" className="text-dark">Informasi Tersedia
                    Setiap Saat</a>
                  <a href="#" className="text-dark">Informasi Serta Merta</a>
                  <a href="#" className="text-dark">Dokumen Informasi</a>
                  <a href="https://lapor.go.id/" className="dropdown-item text-dark ">Lapor!</a>
                  <a href="https://skm.jabarprov.go.id/search" className="dropdown-item text-dark ">Survey
                    Kepuasan Masyarakat</a>
                  <a href="#" className="text-dark">Indeks Kepuasan
                    Masyarakat</a>
                  <a href="#" className="text-dark">BPBD Kab/Kota Jawa
                    Barat</a>
                </li>
              </ul>
            </li>
            <li className="dropdown"><a
              style={{ color: 'white' }}
              href="#"><span>Seputar BPBD Jabar</span>
              <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li>
                  <a href="#" className="text-dark">Berita Terkini</a>
                  <a href="#" className="text-dark">Artikel</a>
                  <a href="#" className="text-dark">Konten Edukasi</a>
                  <a href="#" className="text-dark">Infografis</a>
                </li>
              </ul>
            </li>
            <li className="dropdown"><a
              style={{ color: 'white' }}
              href="#"><span>Info Kebencanaan</span>
              <i className="bi bi-chevron-down"></i></a>
              <ul>
                <li>
                  <a href="#" className="text-dark">Infografis Bencana</a>
                  <a href="#" className="text-dark">Analisis Dampak
                    Bencana</a>
                  <a href="https://barata.jabarprov.go.id/front?start=2023-01-01&amp;to=2023-08-30"
                    className="dropdown-item text-dark ">Sistem Informasi BARATA</a>
                  <a href="#" className="text-dark">Peta KRB</a>
                </li>
              </ul>
            </li>

            <li className="dropdown"><a
              style={{ color: 'white' }}
              href="#">
              <i className="bi bi-search"
                style={{ fontSize: '16px' }}
              ></i></a>
              <ul>
                <li>
                  <div className="container">
                    <form action="#" method="POST">
                      <button type="submit" className="btn btn-primary">Cari</button>
                    </form>
                  </div>
                </li>
              </ul>
            </li>
            <li><a
              style={{ color: 'white' }}
              className="nav-link scrollto" href="#"><i className="bi bi-house"
                style={{ fontSize: '16px' }}
              ></i></a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle text-white"></i>
        </nav>

      </div>
    </header>
  );
}

function Body() {

  const articles = [
    {
      src: 'images/artikel/1963430191566_420401307314121_7492159651464509131_n.jpg',
      url: '#',
      title: 'BPBD Jabar berpartisipasi dalam Apel dan Simulasi Penutupan Bulan K3 Tingkat Provinsi Jawa Barat',
    },
    {
      src: 'images/artikel/52701536-1024.jpg',
      url: '#',
      title: 'BPBD Jabar Gelar Skill Competition Damkar Keduakalinya',
    },
    {
      src: 'images/artikel/9104429989079_737437321851250_3430820839893548127_n.jpg',
      url: '#',
      title: 'BPBD Jabar Mengadakan Sosialisasi Rencana Penanggulangan Bencana (RPB)',
    },
  ];

  const forecasts = [
    {
      city: 'Kota Bandung',
      imageSrc: 'images/cuaca.png',
      condition: 'Cerah',
      temperature: '25°C',
      humidity: '80%',
    },
    {
      city: 'Kota Banjar',
      imageSrc: 'images/cuaca.png',
      condition: 'Cerah Berawan',
      temperature: '27°C',
      humidity: '80%',
    },
    {
      city: 'Kota Bekasi',
      imageSrc: 'images/cuaca.png',
      condition: 'Cerah Berawan',
      temperature: '26°C',
      humidity: '80%',
    },
    {
      city: 'Pelabuhan Ratu',
      imageSrc: 'images/cuaca.png',
      condition: 'Cerah',
      temperature: '25°C',
      humidity: '75%',
    },
  ];

  const contentItems = [
    {
      title: 'Tanah Longsor',
      youtubeLink: 'https://www.youtube.com/embed/CyYuYU58e7I?si=Fq1KyCXd_W_S5jW2',
      backgroundColor: '#ee8200',
    },
    {
      title: 'Covid-19',
      youtubeLink: 'https://www.youtube.com/embed/5evcEePK0EM?si=Fb70hcW8bD3IuAfO',
      backgroundColor: 'aqua',
    },
    {
      title: 'Gempa Bumi',
      youtubeLink: 'https://www.youtube.com/embed/q5xC0NTUsK0?si=i-0gtKIuJ26nRL_b',
      backgroundColor: 'green',
    },
    {
      title: 'Banjir',
      youtubeLink: 'https://www.youtube.com/embed/q5xC0NTUsK0?si=i-0gtKIuJ26nRL_b',
      backgroundColor: 'red',
    },
  ];

  return (
    <div>
      <div
        style={{ marginBottom: "0px;" }}
      >
        <link rel="stylesheet" href="../cdn.jsdelivr.net/npm/swiper%409/swiper-bundle.min.css" />
        <a href="https://wa.me/6282317012056" className="floating" target="_blank">
          <i className="bi bi-whatsapp text-white fab-icon"></i>
        </a>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item ">
              <img src="images/slide/7420slide-bpbd.png" className="d-block w-100" alt="..."></img>
              <center>
                <div className="carousel-caption"
                  style={{ marginBottom: '20px', position: 'absolute' }}
                >
                  SELAMAT DATANG DI WEBSITE RESMI
                  <h2><b>Badan Penanggulangan Bencana Daerah <br />
                    Provinsi Jawa Barat</b></h2>
                </div>
              </center>
            </div>
            <div className="carousel-item active">
              <img src="images/slide/3893slide-bpbd.png" className="d-block w-100" alt="..."></img>
              <center>
                <div className="carousel-caption"
                  style={{ marginBottom: '20px', position: 'absolute' }}
                >
                  SELAMAT DATANG DI WEBSITE RESMI
                  <h2><b>Badan Penanggulangan Bencana Daerah <br />
                    Provinsi Jawa Barat</b></h2>
                </div>
              </center>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container py-3 mb-5">
          <section id="blog" className="blog">
            <div className="container">
              <header className="section-header">
                <p className="text-dark">Seputar BPBD JABAR </p>
              </header>
            </div>
            <div className="row">
              <div className="col-sm" id="tab-gallery">
                <h5 className=""><b> Berita Terkini </b></h5>
                <hr></hr>
                <div className="tab-container">
                  <a
                    href="#">
                    <div className="card text-white">
                      <img src="images/artikel/8890429646395_361853853423917_6632447604571018390_n.jpg"
                        id="expanded-img" className="card-img"></img>
                      <div className="card-img-overlay">
                        <h5 className="card-title ms-3 mb-2 position-absolute bottom-0 start-0">
                          Desa Tarumajaya Terkena dampak dari munculnya angin puting beliung</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="columns mt-2 row">
                </div><br />
                <a href="#" className="text-secondary mt-2"><i><u>Selengkapnya</u></i></a>
              </div>
              <div className="col-sm">
                <h5 className=""><b> Artikel </b></h5>
                <hr></hr>
                <div className="sidebar-item recent-posts">
                  {articles.map((article, index) => (
                    <div className="row" key={index}>
                      <div className="col-4">
                        <div>
                          <img
                            src={article.src}
                            className="rounded"
                            style={{ width: '120px', marginBottom: '10px', height: '70px', objectFit: 'cover' }}
                            alt="Article"
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div id="" className="text-dark">
                          <h6>
                            <b>
                              <a href={article.url} className="text-dark">{article.title}</a>
                            </b>
                          </h6>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
                <h5 className="mt-1"><b>Infografis</b></h5>
                <div className="row">
                </div>
                <br />
                <a href="#" className="text-secondary mt-2"><i><u>Selengkapnya</u></i></a>
              </div>
            </div>
          </section>
        </div>
        <div
          style={{ background: '#EE8200', borderTopLeftRadius: '90px', borderTopRightRadius: '90px' }}
          className="text-white py-5">
          <div className="container " id="counts">
            <center>
              <h1><b>Data Bencana Jawa Barat</b></h1>
              Sumber : <span><a href="https://barata.jabarprov.go.id/"
                style={{ color: 'white', textDecoration: 'none' }}
              >barata.jabarprov.go.id</a></span>
              <div className="mb-2">
                <p>01 Jan 2024 - 08 May 2024
                </p>
              </div>
              <div className="row">
                <div className="col-sm">
                  <h1 className="mt-4"><b id="kejadian_bencana">506</b></h1>
                  <span>Kejadian Bencana</span>
                </div>
                <div className="col-sm">
                  <h1 className="mt-4"><b id="mengungsi">5.183</b></h1>
                  <span>Mengungsi</span>
                </div>
                <div className="col-sm">
                  <h1 className="mt-4"><b id="meninggal">31</b>
                  </h1>
                  <span>Meninggal</span>
                </div>
                <div className="col-sm">
                  <h1 className="mt-4"><b id="terdampak">150.198</b>
                  </h1>
                  <span>Terdampak</span>
                </div>
              </div>
            </center>
          </div>
        </div>
        <br />
        <div className="container">
          <h4
            style={{ color: '#EE8200' }}
            className="text-center mt-4">
            <b>Info Cuaca dan Peringatan Dini</b></h4>
          <div className="text-center">Sumber : <span><a href="https://www.bmkg.go.id/"
            style={{ color: 'black', textDecoration: 'none' }}
          >bmkg.go.id</a></span></div><br />
          <div className="row mb-2">
            <div className="col col-lg-7 col-sm">
              <div className="text-center"
                style={{ color: 'black' }}
              > <b> Perkiraan Cuaca </b> </div>
              <hr></hr>
              <div className="row">
                <div className="splide">
                  <div className="splide__track">
                    <div className="splide__list d-flex gap-2"
                      style={{ height: '280px' }}
                    >
                      {forecasts.map((forecast, index) => (
                        <div className="splide__slide w-25 h-100" key={index}>
                          <div className="card">
                            <div className="card-body">
                              <center className="text-7">
                                <p className="fw-bold">{forecast.city}</p>
                                <br />
                                <img src={forecast.imageSrc} width="100"></img> <br />
                                {forecast.condition} <br />
                                {forecast.temperature} <br />
                                {forecast.humidity}
                              </center>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <a href="https://www.bmkg.go.id/cuaca/prakiraan-cuaca-indonesia.bmkg?Prov=10&amp;NamaProv=Jawa%20Barat"
                className="text-left text-secondary"><i><u> Selengkapnya</u></i></a>
            </div>
            <div className="col col-lg-5 col-sm">
              <div className="text-center"
                style={{ color: 'black' }}
              ><b> Gempa Bumi Terkini </b></div>
              <hr></hr>
              <div className="row">
                <div className="col-sm-6">
                  <img src="images/gempa.png" className="img-fluid"></img>
                </div>
                <div className="col">
                  <br />
                  <h6>08 Mei 2024, 10:16:41 WIB
                  </h6>
                  <div>
                    <i className="bi bi-activity text-danger"></i> Magnitude:
                    <span>4.5</span><br />
                    <i className="bi bi-record-circle text-success"></i> Kedalaman:
                    <span>6 km</span><br />
                    <i className="bi bi-geo-alt-fill text-warning"></i> Lokasi:
                    <span>1.48 LU - 122.99 BT</span>
                    <br />
                    <i className="bi bi-record-circle text-danger"></i>
                    Pusat gempa berada di laut 70 km Boroko-Bolaang Mongondow Utara<br />
                    <i className="bi bi-water"
                      style={{ color: '#ee6c20' }}
                    ></i>
                    Gempa ini dirasakan untuk diteruskan pada masyarakat<br />
                    <a href="https://www.bmkg.go.id/gempabumi-dirasakan.html"
                      className="mt-3 text-left text-secondary"><i><u> Selengkapnya</u></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="text-center text-white bg-dark"
          style={{
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundImage: "url('images/info-kebencanaan/8112info-kebencanaan.png')"
          }}
        >
          <br /><br /><br /><br />
          <h1 className=""><b> Info Kebencanaan</b></h1>
          <br /><br /><br /><br /><br />

          <div className="container"
            style={{ marginBottom: '100px;' }}
          >
            <div className="row">
              <div className="col-sm">
                <div className="card-info"
                  style={{ background: 'rgb(29, 29, 29)', marginTop: '35px' }}
                >
                  <div className="card-image">
                    <img className="p-4"
                      style={{ width: '100px', height: '110px' }}
                      src="images/info-kebencanaan/infografis.png" />
                  </div>
                  <div className="text-start card-body-info text-white"><br />
                    <h4 className=""><b>Infografis Bencana</b></h4><br />
                    <p className=""> Informasi jumlah dan dampak kejadian bencana dalam kurun waktu tertentu.
                    </p><br />
                    <center>
                      <a href="#"
                        className="btn btn-light text-dark position-absolute bottom-0 start-50 translate-middle-x"
                        style={{ borderRadius: '30px', width: '80%', marginBottom: '40px' }}
                      >
                        Lihat</a>
                    </center>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="card-info"
                  style={{ background: 'rgb(29, 29, 29)', marginTop: '35px' }}
                >
                  <div className="card-image">
                    <img className="p-4"
                      style={{ width: '100px', height: '110px' }}
                      src="images/info-kebencanaan/8026analisis.png"></img>
                  </div>
                  <div className="text-start card-body-info text-white"><br />
                    <h4 className=""><b>Analisis Dampak Bencana</b></h4><br />
                    <p className=""> Kajian analisis dampak bencana alam yang terjadi di Provinsi Jawa Barat.
                    </p><br />
                    <center>
                      <a href="#"
                        className="btn btn-light text-dark position-absolute bottom-0 start-50 translate-middle-x"
                        style={{ borderRadius: '30px', width: '80%', marginBottom: '40px' }}
                      >Lihat</a>
                    </center>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="card-info"
                  style={{ background: 'rgb(29, 29, 29)', marginTop: '35px' }}
                >
                  <div className="card-image">
                    <img className="p-4"
                      style={{ width: '100px', height: '110px' }}
                      src="images/info-kebencanaan/1353barata.png"></img>
                  </div>
                  <div className="text-start card-body-info text-white"><br />
                    <h4 className=""><b>Sistem Informasi BARATA</b></h4><br />
                    <p className=""> Jawa Barat Tangguh Bencana, aplikasi informasi kejadian dan penanganan
                      bencana di Jawa Barat.</p><br />
                    <center>
                      <a href="#"
                        className="btn btn-light text-dark position-absolute bottom-0 start-50 translate-middle-x"
                        style={{ borderRadius: '30px', width: '80%', marginBottom: '40px' }}
                      >Lihat</a>
                    </center>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="card-info"
                  style={{ background: 'rgb(29, 29, 29)', marginTop: '35px' }}
                >
                  <div className="card-image">
                    <img className="p-4"
                      style={{ width: '100px', height: '110px' }}
                      src="images/info-kebencanaan/8455kelas-kebencanaan.png"></img>
                  </div>
                  <div className="text-start card-body-info text-white"><br />
                    <h4 className=""><b>Kelas Kebencanaan</b></h4><br />
                    <p className=""> Informasi jumlah dan dampak kejadian bencana dalam kurun waktu tertentu.
                    </p><br />
                    <center>
                      <a href="#"
                        className="btn btn-light text-dark position-absolute bottom-0 start-50 translate-middle-x"
                        style={{ borderRadius: '30px', width: '80%', marginBottom: '40px' }}
                      >Lihat</a>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div
            style={{ background: 'white', borderTopLeftRadius: '110px', borderTopRightRadius: '110px' }}
          >

            <div>
              <br /><br /><br />
              <h1 className="text-dark text-center"><b>Konten Edukasi</b></h1>
              <br /><br />
              <div className="row">
                {contentItems.map((contentitem, index) => (
                  <div className="col-sm-3" key={index}>
                    <div className="splide splide1">
                      <div className="splide__track">
                        <div className="splide__list">
                          <div className="col-sm-12 splide__slide m-2">
                            <div className="card border-0 shadow"
                              style={{ background: contentitem.backgroundColor, borderRadius: '30px' }}>
                              <div className="card-body" ><br />
                                <center>
                                  <h5 className="text-white"><b>{contentitem.title}</b></h5><br />
                                  <iframe
                                    style={{ width: '90%', borderRadius: '30px' }}
                                    src={contentitem.youtubeLink}
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                                </center>
                                <br /><br />
                                <center>
                                  <a href="#"
                                    target="_blank" className="btn btn-light text-dark"
                                    style={{ borderRadius: '30px', width: '80%', marginBottom: '20px' }}
                                  >Lihat</a>
                                </center>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
              <br />
            </div>

          </div>
        </div>
        <br /><br />
      </div>
    </div>
  );
}

function Kontak() {
  return (
    <div>
      <div className="card text-white text-center">
        <img className="card-img" src="images/background-kontak.png" alt="Card image"
          style={{ width: '100%', height: '600px', objectFit: 'cover' }}>

        </img>
        <div className="card-img-overlay">
          <br /><br />
          <h2><b>Kontak Cepat</b></h2>
          <h2>Jika Terjadi Bencana</h2><br /><br />
          <h2>Call Center</h2>
          <h1><b>+6282317012056</b></h1>
          <i>(Whatsapp Only)</i>
          <br /><br />
          <h2>Humas</h2>
          <h1><b>081320992800</b></h1>
          <br /><br /><br />
          <div className="row">
            <div className="col-sm">
              bpbd@jabarprov.go.id
            </div>
            <div className="col-sm">
              bpbdprovjabar@gmail.com
            </div>
            <div className="col-sm">
              humasbpbdjabar@jabarprov.go.id
            </div>
            <div className="col-sm">
              humasbpbdjabar@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: '#ffd4bb' }}>
        <br /><br />
        <h2 className="text-dark text-center"><b>Media Sosial</b></h2>
        <div className="container"><br /><br />
          <div className="row">
            <div className="col-sm-5">
              <img src="images/temukan-kami.png" style={{ width: '100%' }} alt=""></img>
            </div>
            <div className="col">
              <div className="card bg-white mt-4 border-0"
                style={{ borderRadius: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.241)' }}>
                <div className="card-body">
                  <table>
                    <tr>
                      <td style={{ paddingRight: '20px' }}>
                        <img src="images/fb.png" style={{ width: '50px' }}></img>
                      </td>
                      <td>
                        <a href="http://facebook.com/bpbd" target="_blank">
                          <h4 className="mt-1 text-dark"> BPBD Jawa Barat</h4>
                        </a>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="card bg-white mt-4 border-0"
                style={{ borderRadius: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.241)' }}>
                <div className="card-body">
                  <table>
                    <tr>
                      <td style={{ paddingRight: '20px' }}>
                        <img src="images/tw.png" style={{ width: '50px' }}></img>
                      </td>
                      <td>

                        <a href="https://www.twitter.com/bpbd" target="_blank">
                          <h4 className="mt-1 text-dark"> BPBD Jabar</h4>
                        </a>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="card bg-white mt-4 border-0"
                style={{ borderRadius: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.241)' }}>
                <div className="card-body">
                  <table>
                    <tr>
                      <td style={{ paddingRight: '20px' }}>
                        <img src="images/ig.png" style={{ width: '50px' }}></img>
                      </td>
                      <td style={{ width: '80%' }}>

                        <a href="https://www.instagram.com/bpbd" target="_blank">
                          <h4 className="mt-1 text-dark"> bpbdprovjabar</h4>
                        </a>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="card bg-white mt-4 mb-5 border-0"
                style={{ borderRadius: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.241)' }}>
                <div className="card-body">
                  <table>
                    <tr>
                      <td style={{ paddingRight: '20px' }}>
                        <img src="images/tt.png" style={{ width: '50px' }}></img>
                      </td>
                      <td>

                        <a href="http://tiktok.com/bpbd" target="_blank">
                          <h4 className="mt-1 text-dark"> Bpbdjabar</h4>
                        </a>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundImage: "url('images/background-link-terkait.png')"
        }}>
        <div className="container">
          <center>
            <br /><br /><br /><br />
            <h2 className="text-dark "><b>Link Terkait</b></h2>
            <br /><br />
            <div className="row">
              <div className="col-sm">
                <a href="https://bnpb.go.id/" target="_blank">
                  <div className="card mb-3 border-0 shadow"
                    style={{ background: 'rgba(255, 255, 255, 0.765)', borderRadius: '20px' }}>
                    <div className="p-3">
                      <img src="images/logo-bnbp.png" className="" style={{ width: '130px' }} alt=""></img>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-sm">
                <a href="https://jabarprov.go.id/" target="_blank">
                  <div className="card mb-3 border-0 shadow"
                    style={{ background: 'rgba(255, 255, 255, 0.765)', borderRadius: '20px' }}>
                    <div className="p-3">
                      <img src="images/logo-jabar.png" className="" style={{ width: '147px' }} alt=""></img>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-sm">
                <a href="https://damkar.jabarprov.go.id/" target="_blank">
                  <div className="card mb-3 border-0 shadow"
                    style={{ background: 'rgba(255, 255, 255, 0.765)', borderRadius: '20px' }}>
                    <div className="p-3">
                      <img src="images/logo-damkar.png" className="" style={{ width: '163px' }} alt=""></img>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-sm">
                <a href="https://bmkg.go.id/" target="_blank">
                  <div className="card mb-3 border-0 shadow"
                    style={{ background: 'rgba(255, 255, 255, 0.765)', borderRadius: '20px' }}>
                    <div className="p-3">
                      <img src="images/logo-bmkg.png" className="" alt="" style={{ width: '137px' }}></img>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-sm">
                <a href="https://ppid.jabarprov.go.id/" target="_blank"></a>
                <div className="card mb-3 border-0 shadow"
                  style={{ background: 'rgba(255, 255, 255, 0.765)', borderRadius: '20px' }}>
                  <div className="p-3"><br />
                    <img src="images/logo-ppd.png" className="" style={{ width: '150px' }} alt=""
                    ></img><br /><br />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <a href="https://magma.vsi.esdm.go.id/" target="_blank">
                  <div className="card mb-3 border-0 shadow"
                    style={{ background: 'rgba(255, 255, 255, 0.765)', borderRadius: '20px' }}>
                    <div className="p-3">
                      <img src="images/logo-magma.png" className="" alt="" style={{ width: '160px' }}></img>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-sm">
                <a href="https://vsi.esdm.go.id/" target="_blank">
                  <div className="card mb-3 border-0 shadow"
                    style={{ background: 'rgba(255, 255, 255, 0.765)', borderRadius: '20px' }}>
                    <div className="p-3">
                      <img src="images/logo-mineral.png" className="" alt="" style={{ width: '160px' }}></img>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-sm">
                <a href="https://inarisk.bnpb.go.id/" target="_blank">
                  <div className="card mb-3 border-0 shadow"
                    style={{ background: 'rgba(255, 255, 255, 0.765)', borderRadius: '20px' }}>
                    <div className="p-3">
                      <img src="images/logo-inarisk.png" className="" alt="" style={{ width: '160px' }}></img>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-sm">
                <a href="https://lpse.jabarprov.go.id/" target="_blank">
                  <div className="card mb-3 border-0 shadow"
                    style={{ background: 'rgba(255, 255, 255, 0.765)', borderRadius: '20px' }}>
                    <div className="p-3">
                      <img src="images/logo-lpse.png" className="" alt="" style={{ width: '160px' }}></img>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-sm">
                <a href="https://inspektorat.jabarprov.go.id/unit-pengendali-gratifikasi/" target="_blank"></a>
                <div className="card mb-3 border-0 shadow"
                  style={{ background: 'rgba(255, 255, 255, 0.765)', borderRadius: '20px' }}>
                  <div className="p-3">
                    <img src="images/logo-upg.png" className="" alt="" style={{ width: '160px' }}></img>
                  </div>
                </div>
              </div>
            </div>
          </center>
        </div><br /><br /><br /><br />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-top bg-dark text-white">
        <div className="container">
          <div className="row gy-4">
            <div className="col-sm footer-info">

              <h6 className=""><b>ALAMAT KANTOR</b></h6> <br />
              <a href="#" className="logo d-flex align-items-center">

                <span className="text-white">BPBD JABAR</span>
              </a>
              <p>Jalan Soekarno Hatta No. 629 Kota Bandung</p>
              <br />
              <b>KONTAK</b><br />

              Call center. 0821124243629 <br />
              Telp. 6282317012056 <br />
              Fax. (022) 7310952 <br />
              bpbd@jabarprov.go.id <br />
              bpbdprovjabar@gmail.com <br />
              <br />
              <b>HUMAS BPBD JABAR</b>
              <br />
              Telp. 081320992800 <br />
              humasbpbdjabar@jabarprov.go.id <br />
              humasbpbdjabar@gmail.com <br />
            </div>

            <div className="col-sm footer-links">
              <h4 className="text-white">PETA LOKASI</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5635386368654!2d107.64713740062437!3d-6.942649260476556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e81482f75959%3A0xb6a64e4d14cf6918!2sBadan%20Penanggulangan%20Bencana%20Daerah%20Provinsi%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1690094574738!5m2!1sid!2sid"
                width="100%" height="200" style={{ border: '0' }} allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-sm footer-links">
              <h4 className="text-white">TAUTAN CEPAT</h4>
              <a href="#" className="text-white">BARATA</a>
              <hr></hr>
              <a href="#" className="text-white">Peta KRB</a>
              <hr></hr>
              <a href="#" className="text-white">Konten Edukasi</a>
              <hr></hr>
              <a href="#" className="text-white">Berita Terkini</a>
              <hr></hr>
              <a href="#" className="text-white">Infografi</a>
              <hr></hr>
              <a href="#" className="text-white">PPID</a>
              <hr></hr>
              <a href="#" className="text-white">Daftar Informasi</a>
              <hr></hr>
            </div>

            <div className="col-sm footer-links">
              <h4 className="text-white">LAYANAN PENGADUAN</h4>
              <img src="images/lapor.png" className="img-fluid" alt=""></img> <br /><br />
              <h4 className="text-white">MEDIA SOSIAL</h4>
              <div className="mt-3 text-sm text-white">
                <a href="http://facebook.com/bpbd" className="facebook text-white"><i
                  className="bi bi-facebook text-white"></i>
                  BPBD Provinsi Jawa Barat</a><br />
                <a href="https://www.instagram.com/bpbd" className="instagram text-white"><i
                  className="bi bi-instagram text-white"></i>
                  bpbd_jabar</a><br />
                <a href="#" className="tiktok text-white"><i className="bi bi-tiktok text-white"></i>
                  bpbdjabar</a><br />
                <a href="https://www.twitter.com/bpbd" className="twitter text-white"><i
                  className="bi bi-twitter text-white"></i>
                  @BPBDJabar</a><br />
                <a href="#" className="youtube text-white"><i className="bi bi-youtube text-white"></i> BPBD Prov.
                  Jabar</a><br />
              </div>
              <br />
              <div className="card border-0" style={{ borderRadius: '13px' }}>
                <div className="card-body">
                  <h5 className="text-dark"> Visitors: <b> 77260</b></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright text-dark">
          &copy; Copyright <strong><span>BPBD JABAR</span></strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default App;
