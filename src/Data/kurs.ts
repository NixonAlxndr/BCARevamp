export interface KursItem {
  nama: string;
  gambar: string;
  "e-rate": {
    beli: number;
    jual: number;
  };
  "tt-counter": {
    beli: number;
    jual: number;
  };
  "bank-notes": {
    beli: number;
    jual: number;
  };
}

export const kurs : KursItem[] = [
    {
        "nama" : "USD",
        "gambar" : "../src/assets/Flag/usd.png",
        "e-rate" : {
            "beli" : 16.240,
            "jual" : 16.390
        },
        "tt-counter" : {
            "beli" : 16.160,
            "jual" : 16.460
        },
        "bank-notes" : {
            "beli" : 16.110,
            "jual" : 16.410
        }
    },
    {
        "nama" : "SGD",
        "gambar" : "../src/assets/Flag/sgd.png",
        "e-rate" : {
            "beli" : 12.568,
            "jual" : 12.702
        },
        "tt-counter" : {
            "beli" : 12.540,
            "jual" : 12.783
        },
        "bank-notes" : {
            "beli" : 12.491,
            "jual" : 12.733
        }
    },
    {
        "nama" : "EUR",
        "gambar" : "../src/assets/Flag/eur.png",
        "e-rate" : {
            "beli" : 18.407,
            "jual" : 18.619
        },
        "tt-counter" : {
            "beli" : 18.289,
            "jual" : 18.678
        },
        "bank-notes" : {
            "beli" : 18.211,
            "jual" : 18.601
        }
    },
    {
        "nama" : "AUD",
        "gambar" : "../src/assets/Flag/aud.png",
        "e-rate" : {
            "beli" : 10.429,
            "jual" : 10.555
        },
        "tt-counter" : {
            "beli" : 10.377,
            "jual" : 10.636
        },
        "bank-notes" : {
            "beli" : 10.351,
            "jual" : 10.594
        }
    },
    {
        "nama" : "DKK",
        "gambar" : "../src/assets/Flag/dkk.png",
        "e-rate" : {
            "beli" : 2.451,
            "jual" : 2.512
        },
        "tt-counter" : {
            "beli" : 2.448,
            "jual" : 2.518
        },
        "bank-notes" : {
            "beli" : 0,
            "jual" : 0
        }
    },
    {
        "nama" : "SEK",
        "gambar" : "../src/assets/Flag/sek.png",
        "e-rate" : {
            "beli" : 1.674,
            "jual" : 1.727,
        },
        "tt-counter" : {
            "beli" : 1.675,
            "jual" : 1.728
        },
        "bank-notes" : {
            "beli" : 0,
            "jual" : 0
        }
    },
    {
        "nama" : "CAD",
        "gambar" : "../src/assets/Flag/cad.png",
        "e-rate" : {
            "beli" : 11.812,
            "jual" : 11.933
        },
        "tt-counter" : {
            "beli" : 11.668,
            "jual" : 11.930
        },
        "bank-notes" : {
            "beli" : 11.632,
            "jual" : 11.899
        }
    },
    {
        "nama" : "CHF",
        "gambar" : "../src/assets/Flag/chf.png",
        "e-rate" : {
            "beli" : 19.723,
            "jual" : 19.946,
        },
        "tt-counter" : {
            "beli" : 19.505,
            "jual" : 19.939
        },
        "bank-notes" : {
            "beli" : 19.412,
            "jual" : 19.824
        }
    },
    {
        "nama" : "NZD",
        "gambar" : "../src/assets/Flag/nzd.png",
        "e-rate" : {
            "beli" : 9.661,
            "jual" : 9.787
        },
        "tt-counter" : {
            "beli" : 9.594,
            "jual" : 9.871
        },
        "bank-notes" : {
            "beli" : 9.541,
            "jual" : 9.769
        }
    },
    {
        "nama" : "GBP",
        "gambar" : "../src/assets/Flag/gbp.png",
        "e-rate" : {
            "beli" : 21.847,
            "jual" : 22.072
        },
        "tt-counter" : {
            "beli" : 21.784,
            "jual" : 22.260
        },
        "bank-notes" : {
            "beli" : 21.718,
            "jual" : 22.173
        }
    },

]