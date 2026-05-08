export interface Slide {
  id: number;
  title: string;
  content: string;
  type: 'title' | 'content' | 'split' | 'quote';
  imagePrompt?: string;
}

export const slides: Slide[] = [
  {
    id: 1,
    title: "Etikaning Asosiy Kategoriyasi: Baxt",
    content: "Inson intilishlarining oliy maqsadi va axloqiy qadriyatlar tizimidagi o'rni",
    type: 'title',
    imagePrompt: "a cinematic wide shot of a peaceful golden valley at sunrise, ethereal morning mist, minimalist philosophical atmosphere, high quality photography"
  },
  {
    id: 2,
    title: "Baxt nima?",
    content: "Baxt — bu insonning o'z hayotidan, faoliyatidan va erishgan natijalaridan to'laqonli qoniqish hissi. Etikada baxt nafaqat hissiyot, balki axloqiy yashash tarzi sifatida ham ko'riladi.",
    type: 'content',
    imagePrompt: "abstract representation of inner peace, soft glowing sphere of light in a dark void, minimalist, symbolic of enlightenment and contentment"
  },
  {
    id: 3,
    title: "Antik Davr Qarashlari",
    content: "**Aristotel (Evdemonizm):** Baxt — bu ruhning fazilatga muvofiq faoliyati. Bu shunchaki zavq emas, balki insoniy salohiyatni ro'yobga chiqarishdir.\n\n**Epikur (Hedonizm):** Baxt — bu azobning yo'qligi va ruhning xotirjamligi (ataraksiya).",
    type: 'split',
    imagePrompt: "ancient greek architecture columns standing under a dramatic blue sky, cinematic lighting, conceptual representing classical wisdom"
  },
  {
    id: 4,
    title: "Baxtning Ikki Yo'nalishi",
    content: "1. **Hedonistik baxt:** Lahzalik zavq-shavq, jismoniy va hissiy lazzatlanishga asoslangan.\n\n2. **Evdemonistik baxt:** Ma'noli hayot, o'z ustida ishlash, fazilat va donolikka intilish orqali erishiladigan barqaror holat.",
    type: 'content',
    imagePrompt: "two paths diverging in a mystical forest, one path bright and flashy, the other deep and calm, high detail, surreal atmosphere"
  },
  {
    id: 5,
    title: "Immanuil Kant: Baxt va Burch",
    content: "Kant baxtni axloqning asosi deb hisoblamagan. Uning fikricha, inson baxtli bo'lishga emas, balki **baxtga munosib bo'lishga** (fazilatli bo'lishga) intilishi kerak.",
    type: 'quote',
    imagePrompt: "a solitary star shining brightly in a deep night sky above a calm ocean, representing duty and cosmic order, cinematic"
  },
  {
    id: 6,
    title: "Baxtning Axloqiy Shartlari",
    content: "- **Vijdoniylik:** O'z harakatlari uchun mas'uliyat.\n- **Adolat:** Boshqalarning baxtiga zarar yetkazmaslik.\n- **Xayriya:** Boshqalarga yordam berish orqali keladigan ma'naviy boylik.",
    type: 'content',
    imagePrompt: "a pair of hands holding a small glowing plant, soft warm lighting, macro shot, symbol of care, justice and ethical growth"
  },
  {
    id: 7,
    title: "Zamonaviy Etikada Baxt",
    content: "Bugungi kunda baxt nafaqat shaxsiy yutuq, balki ijtimoiy farovonlik bilan ham bog'liq. 'Umumiy baxt insoniyatning asosiy maqsadi' (Utilitarizm).",
    type: 'content',
    imagePrompt: "a modern minimalist city skyline reflected in water at dusk, golden hour, social harmony theme, clean lines"
  },
  {
    id: 8,
    title: "Xulosa",
    content: "Baxt — bu yo'lning oxiri emas, balki o'sha yo'lning o'zidir. Axloqiy me'yorlar asosida yashash haqiqiy va davomiy baxtning kalitidir.",
    type: 'title',
    imagePrompt: "a long winding road through a beautiful autumn landscape leading towards a bright horizon, journey theme, high quality cinematic"
  },
  {
    id: 9,
    title: "O'z-o'zini tahlil qilish",
    content: "Siz uchun baxt nima? \n\n1. Faqat o'z manfaatingizni ko'zlashmi? \n2. Yoki boshqalarga foyda keltirish orqali keladigan ichki xotirjamlikmi? \n\n*Haqiqiy baxt — bu axloqiy prinsiplar va hayotiy maqsadlarning uyg'unligidir.*",
    type: 'content',
    imagePrompt: "a mirror reflecting a soft golden light in a minimalist room, introspection theme, soft shadows, ethereal atmosphere"
  }
];
