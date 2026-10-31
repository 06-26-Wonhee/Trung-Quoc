/**
 * Chinese Learning App - Master Comprehensive Dataset
 * Covers HSK 1 to HSK 6 Vocabulary, Categorized by Topics,
 * Pre-built Vocabulary Decks, and Level-Specific Exercises (HSK 1 - HSK 6).
 */

// STANDARDIZED CATEGORIES / TOPICS
const CATEGORIES_LIST = [
  { id: 'greetings', name: 'Chào hỏi & Giao tiếp', icon: '👋' },
  { id: 'family', name: 'Gia đình & Con người', icon: '👨‍👩‍👧' },
  { id: 'food', name: 'Đồ ăn & Thức uống', icon: '🍜' },
  { id: 'time', name: 'Thời gian & Ngày tháng', icon: '⏰' },
  { id: 'school', name: 'Trường học & Giáo dục', icon: '🎓' },
  { id: 'work', name: 'Công việc & Nghề nghiệp', icon: '💼' },
  { id: 'travel', name: 'Giao thông & Du lịch', icon: '✈️' },
  { id: 'shopping', name: 'Mua sắm & Tiền tệ', icon: '🛍️' },
  { id: 'health', name: 'Sức khỏe & Y tế', icon: '🏥' },
  { id: 'sports', name: 'Thể thao & Giải trí', icon: '⚽' },
  { id: 'emotions', name: 'Cảm xúc & Tính cách', icon: '😊' },
  { id: 'places', name: 'Địa điểm & Phương hướng', icon: '📍' },
  { id: 'society', name: 'Xã hội & Đời sống', icon: '🏙️' },
  { id: 'business', name: 'Kinh tế & Thương mại', icon: '📈' },
  { id: 'science', name: 'Khoa học & Công nghệ', icon: '🔬' },
  { id: 'idioms', name: 'Thành ngữ & Triết lý', icon: '📜' }
];

// 1. MASTER VOCABULARY LIST (HSK 1 TO HSK 6)
const DEFAULT_HSK_WORDS = [
  // ==================== HSK 1 ====================
  {
    id: 'hsk1-01',
    hanzi: '你',
    pinyin: 'nǐ',
    meaning: 'Bạn, anh, chị (ngôi thứ 2)',
    level: 'HSK 1',
    category: 'Chào hỏi & Giao tiếp',
    type: 'Đại từ',
    example: {
      hanzi: '你好！很高兴认识你。',
      pinyin: 'Nǐ hǎo! Hěn gāoxìng rènshi nǐ.',
      meaning: 'Chào bạn! Rất vui được quen biết bạn.'
    }
  },
  {
    id: 'hsk1-02',
    hanzi: '我',
    pinyin: 'wǒ',
    meaning: 'Tôi, ta, mình (ngôi thứ 1)',
    level: 'HSK 1',
    category: 'Chào hỏi & Giao tiếp',
    type: 'Đại từ',
    example: {
      hanzi: '我是越南人。',
      pinyin: 'Wǒ shì Yuènán rén.',
      meaning: 'Tôi là người Việt Nam.'
    }
  },
  {
    id: 'hsk1-03',
    hanzi: '他',
    pinyin: 'tā',
    meaning: 'Anh ấy, ông ấy, cậu ấy',
    level: 'HSK 1',
    category: 'Chào hỏi & Giao tiếp',
    type: 'Đại từ',
    example: {
      hanzi: '他是我的汉语老师。',
      pinyin: 'Tā shì wǒ de Hànyǔ lǎoshī.',
      meaning: 'Thầy ấy là giáo viên tiếng Trung của tôi.'
    }
  },
  {
    id: 'hsk1-04',
    hanzi: '她',
    pinyin: 'tā',
    meaning: 'Cô ấy, bà ấy, chị ấy',
    level: 'HSK 1',
    category: 'Chào hỏi & Giao tiếp',
    type: 'Đại từ',
    example: {
      hanzi: '她很喜欢看书。',
      pinyin: 'Tā hěn xǐhuan kàn shū.',
      meaning: 'Cô ấy rất thích đọc sách.'
    }
  },
  {
    id: 'hsk1-05',
    hanzi: '我们',
    pinyin: 'wǒmen',
    meaning: 'Chúng tôi, chúng ta',
    level: 'HSK 1',
    category: 'Chào hỏi & Giao tiếp',
    type: 'Đại từ',
    example: {
      hanzi: '我们一起去吃饭吧。',
      pinyin: 'Wǒmen yìqǐ qù chī fàn ba.',
      meaning: 'Chúng mình cùng nhau đi ăn cơm nhé.'
    }
  },
  {
    id: 'hsk1-06',
    hanzi: '谢谢',
    pinyin: 'xièxie',
    meaning: 'Cảm ơn',
    level: 'HSK 1',
    category: 'Chào hỏi & Giao tiếp',
    type: 'Động từ',
    example: {
      hanzi: '谢谢你的帮助！',
      pinyin: 'Xièxie nǐ de bāngzhù!',
      meaning: 'Cảm ơn sự giúp đỡ của bạn!'
    }
  },
  {
    id: 'hsk1-07',
    hanzi: '不客气',
    pinyin: 'bú kèqi',
    meaning: 'Đừng khách sáo, không có gì',
    level: 'HSK 1',
    category: 'Chào hỏi & Giao tiếp',
    type: 'Cụm từ',
    example: {
      hanzi: '不客气，请坐。',
      pinyin: 'Bú kèqi, qǐng zuò.',
      meaning: 'Không có gì, mời ngồi.'
    }
  },
  {
    id: 'hsk1-08',
    hanzi: '再见',
    pinyin: 'zàijiàn',
    meaning: 'Tạm biệt, hẹn gặp lại',
    level: 'HSK 1',
    category: 'Chào hỏi & Giao tiếp',
    type: 'Động từ',
    example: {
      hanzi: '明天见，再见！',
      pinyin: 'Míngtiān jiàn, zàijiàn!',
      meaning: 'Ngày mai gặp, tạm biệt!'
    }
  },
  {
    id: 'hsk1-09',
    hanzi: '爸爸',
    pinyin: 'bàba',
    meaning: 'Bố, cha',
    level: 'HSK 1',
    category: 'Gia đình & Con người',
    type: 'Danh từ',
    example: {
      hanzi: '我爸爸今年五十岁。',
      pinyin: 'Wǒ bàba jīnnián wǔshí suì.',
      meaning: 'Bố tôi năm nay 50 tuổi.'
    }
  },
  {
    id: 'hsk1-10',
    hanzi: '妈妈',
    pinyin: 'māma',
    meaning: 'Mẹ, má',
    level: 'HSK 1',
    category: 'Gia đình & Con người',
    type: 'Danh từ',
    example: {
      hanzi: '妈妈做的菜非常好吃。',
      pinyin: 'Māma zuò de cài fēicháng hǎochī.',
      meaning: 'Món mẹ nấu rất là ngon.'
    }
  },
  {
    id: 'hsk1-11',
    hanzi: '吃',
    pinyin: 'chī',
    meaning: 'Ăn',
    level: 'HSK 1',
    category: 'Đồ ăn & Thức uống',
    type: 'Động từ',
    example: {
      hanzi: '你想吃什么？',
      pinyin: 'Nǐ xiǎng chī shénme?',
      meaning: 'Bạn muốn ăn gì?'
    }
  },
  {
    id: 'hsk1-12',
    hanzi: '喝',
    pinyin: 'hē',
    meaning: 'Uống',
    level: 'HSK 1',
    category: 'Đồ ăn & Thức uống',
    type: 'Động từ',
    example: {
      hanzi: '我想喝一杯中国茶。',
      pinyin: 'Wǒ xiǎng hē yì bēi Zhōngguó chá.',
      meaning: 'Tôi muốn uống một tách trà Trung Quốc.'
    }
  },
  {
    id: 'hsk1-13',
    hanzi: '水',
    pinyin: 'shuǐ',
    meaning: 'Nước',
    level: 'HSK 1',
    category: 'Đồ ăn & Thức uống',
    type: 'Danh từ',
    example: {
      hanzi: '多喝水对身体好。',
      pinyin: 'Duō hē shuǐ duì shēntǐ hǎo.',
      meaning: 'Uống nhiều nước rất tốt cho cơ thể.'
    }
  },
  {
    id: 'hsk1-14',
    hanzi: '茶',
    pinyin: 'chá',
    meaning: 'Trà, chè',
    level: 'HSK 1',
    category: 'Đồ ăn & Thức uống',
    type: 'Danh từ',
    example: {
      hanzi: '中国人很喜欢喝茶。',
      pinyin: 'Zhōngguó rén hěn xǐhuan hē chá.',
      meaning: 'Người Trung Quốc rất thích uống trà.'
    }
  },
  {
    id: 'hsk1-15',
    hanzi: '米饭',
    pinyin: 'mǐfàn',
    meaning: 'Cơm',
    level: 'HSK 1',
    category: 'Đồ ăn & Thức uống',
    type: 'Danh từ',
    example: {
      hanzi: '中午我们吃米饭。',
      pinyin: 'Zhōngwǔ wǒmen chī mǐfàn.',
      meaning: 'Buổi trưa chúng mình ăn cơm.'
    }
  },
  {
    id: 'hsk1-16',
    hanzi: '苹果',
    pinyin: 'píngguǒ',
    meaning: 'Quả táo',
    level: 'HSK 1',
    category: 'Đồ ăn & Thức uống',
    type: 'Danh từ',
    example: {
      hanzi: '这个红苹果很甜。',
      pinyin: 'Zhè ge hóng píngguǒ hěn tián.',
      meaning: 'Quả táo đỏ này rất ngọt.'
    }
  },
  {
    id: 'hsk1-17',
    hanzi: '今天',
    pinyin: 'jīntiān',
    meaning: 'Hôm nay',
    level: 'HSK 1',
    category: 'Thời gian & Ngày tháng',
    type: 'Danh từ',
    example: {
      hanzi: '今天星期五。',
      pinyin: 'Jīntiān xīngqīwǔ.',
      meaning: 'Hôm nay là thứ Sáu.'
    }
  },
  {
    id: 'hsk1-18',
    hanzi: '明天',
    pinyin: 'míngtiān',
    meaning: 'Ngày mai',
    level: 'HSK 1',
    category: 'Thời gian & Ngày tháng',
    type: 'Danh từ',
    example: {
      hanzi: '明天你有空吗？',
      pinyin: 'Míngtiān nǐ yǒu kòng ma?',
      meaning: 'Ngày mai bạn có rảnh không?'
    }
  },
  {
    id: 'hsk1-19',
    hanzi: '学校',
    pinyin: 'xuéxiào',
    meaning: 'Trường học',
    level: 'HSK 1',
    category: 'Trường học & Giáo dục',
    type: 'Danh từ',
    example: {
      hanzi: '我们的学校很大。',
      pinyin: 'Wǒmen de xuéxiào hěn dà.',
      meaning: 'Trường học của chúng tôi rất lớn.'
    }
  },
  {
    id: 'hsk1-20',
    hanzi: '老师',
    pinyin: 'lǎoshī',
    meaning: 'Thầy / cô giáo',
    level: 'HSK 1',
    category: 'Trường học & Giáo dục',
    type: 'Danh từ',
    example: {
      hanzi: '李老师教我们汉语。',
      pinyin: 'Lǐ lǎoshī jiāo wǒmen Hànyǔ.',
      meaning: 'Cô giáo Lý dạy chúng tôi tiếng Hán.'
    }
  },
  {
    id: 'hsk1-21',
    hanzi: '学生',
    pinyin: 'xuésheng',
    meaning: 'Học sinh, sinh viên',
    level: 'HSK 1',
    category: 'Trường học & Giáo dục',
    type: 'Danh từ',
    example: {
      hanzi: '教室里有很多学生。',
      pinyin: 'Jiàoshì lǐ yǒu hěn duō xuésheng.',
      meaning: 'Trong lớp học có rất nhiều học sinh.'
    }
  },
  {
    id: 'hsk1-22',
    hanzi: '商店',
    pinyin: 'shāngdiàn',
    meaning: 'Cửa hàng, tiệm buôn',
    level: 'HSK 1',
    category: 'Mua sắm & Tiền tệ',
    type: 'Danh từ',
    example: {
      hanzi: '我去商店买笔。',
      pinyin: 'Wǒ qù shāngdiàn mǎi bǐ.',
      meaning: 'Tôi đi cửa hàng mua bút.'
    }
  },
  {
    id: 'hsk1-23',
    hanzi: '钱',
    pinyin: 'qián',
    meaning: 'Tiền',
    level: 'HSK 1',
    category: 'Mua sắm & Tiền tệ',
    type: 'Danh từ',
    example: {
      hanzi: '这个多少钱？',
      pinyin: 'Zhè ge duōshao qián?',
      meaning: 'Cái này bao nhiêu tiền?'
    }
  },
  {
    id: 'hsk1-24',
    hanzi: '医院',
    pinyin: 'yīyuàn',
    meaning: 'Bệnh viện',
    level: 'HSK 1',
    category: 'Sức khỏe & Y tế',
    type: 'Danh từ',
    example: {
      hanzi: '他在医院工作。',
      pinyin: 'Tā zài yīyuàn gōngzuò.',
      meaning: 'Anh ấy làm việc ở bệnh viện.'
    }
  },
  {
    id: 'hsk1-25',
    hanzi: '高兴',
    pinyin: 'gāoxìng',
    meaning: 'Vui vẻ, phấn khởi',
    level: 'HSK 1',
    category: 'Cảm xúc & Tính cách',
    type: 'Tính từ',
    example: {
      hanzi: '今天我非常高兴。',
      pinyin: 'Jīntiān wǒ fēicháng gāoxìng.',
      meaning: 'Hôm nay tôi rất vui vẻ.'
    }
  },

  // ==================== HSK 2 ====================
  {
    id: 'hsk2-01',
    hanzi: '帮助',
    pinyin: 'bāngzhù',
    meaning: 'Giúp đỡ, sự hỗ trợ',
    level: 'HSK 2',
    category: 'Chào hỏi & Giao tiếp',
    type: 'Động từ',
    example: {
      hanzi: '谢谢大家的帮助。',
      pinyin: 'Xièxie dàjiā de bāngzhù.',
      meaning: 'Cảm ơn sự giúp đỡ của mọi người.'
    }
  },
  {
    id: 'hsk2-02',
    hanzi: '介绍',
    pinyin: 'jièshào',
    meaning: 'Giới thiệu',
    level: 'HSK 2',
    category: 'Chào hỏi & Giao tiếp',
    type: 'Động từ',
    example: {
      hanzi: '让我介绍一下我的朋友。',
      pinyin: 'Ràng wǒ jièshào yíxià wǒ de péngyou.',
      meaning: 'Để tôi giới thiệu một chút về bạn tôi.'
    }
  },
  {
    id: 'hsk2-03',
    hanzi: '哥哥',
    pinyin: 'gēge',
    meaning: 'Anh trai',
    level: 'HSK 2',
    category: 'Gia đình & Con người',
    type: 'Danh từ',
    example: {
      hanzi: '我哥哥比我大三岁。',
      pinyin: 'Wǒ gēge bǐ wǒ dà sān suì.',
      meaning: 'Anh trai lớn hơn tôi 3 tuổi.'
    }
  },
  {
    id: 'hsk2-04',
    hanzi: '姐姐',
    pinyin: 'jiějie',
    meaning: 'Chị gái',
    level: 'HSK 2',
    category: 'Gia đình & Con người',
    type: 'Danh từ',
    example: {
      hanzi: '我姐姐是护士。',
      pinyin: 'Wǒ jiějie shì hùshi.',
      meaning: 'Chị gái tôi là y tá.'
    }
  },
  {
    id: 'hsk2-05',
    hanzi: '弟弟',
    pinyin: 'dìdi',
    meaning: 'Em trai',
    level: 'HSK 2',
    category: 'Gia đình & Con người',
    type: 'Danh từ',
    example: {
      hanzi: '弟弟喜欢踢足球。',
      pinyin: 'Dìdi xǐhuan tī zúqiú.',
      meaning: 'Em trai thích đá bóng.'
    }
  },
  {
    id: 'hsk2-06',
    hanzi: '妹妹',
    pinyin: 'mèimei',
    meaning: 'Em gái',
    level: 'HSK 2',
    category: 'Gia đình & Con người',
    type: 'Danh từ',
    example: {
      hanzi: '妹妹在看动画片。',
      pinyin: 'Mèimei zài kàn dònghuàpiàn.',
      meaning: 'Em gái đang xem phim hoạt hình.'
    }
  },
  {
    id: 'hsk2-07',
    hanzi: '跑步',
    pinyin: 'pǎobù',
    meaning: 'Chạy bộ',
    level: 'HSK 2',
    category: 'Thể thao & Giải trí',
    type: 'Động từ',
    example: {
      hanzi: '他每天早上都去跑步。',
      pinyin: 'Tā měitiān zǎoshang dōu qù pǎobù.',
      meaning: 'Anh ấy mỗi sáng đều đi chạy bộ.'
    }
  },
  {
    id: 'hsk2-08',
    hanzi: '游泳',
    pinyin: 'yóuyǒng',
    meaning: 'Bơi lội',
    level: 'HSK 2',
    category: 'Thể thao & Giải trí',
    type: 'Động từ',
    example: {
      hanzi: '夏天我最喜欢游泳。',
      pinyin: 'Xiàtiān wǒ zuì xǐhuan yóuyǒng.',
      meaning: 'Mùa hè tôi thích bơi lội nhất.'
    }
  },
  {
    id: 'hsk2-09',
    hanzi: '踢足球',
    pinyin: 'tī zúqiú',
    meaning: 'Đá bóng',
    level: 'HSK 2',
    category: 'Thể thao & Giải trí',
    type: 'Cụm động từ',
    example: {
      hanzi: '下午我们一起去踢足球吧。',
      pinyin: 'Xiàwǔ wǒmen yìqǐ qù tī zúqiú ba.',
      meaning: 'Chiều nay chúng mình cùng đi đá bóng nhé.'
    }
  },
  {
    id: 'hsk2-10',
    hanzi: '生病',
    pinyin: 'shēngbìng',
    meaning: 'Bị ốm, bị bệnh',
    level: 'HSK 2',
    category: 'Sức khỏe & Y tế',
    type: 'Động từ',
    example: {
      hanzi: '他生病了，在家里休息。',
      pinyin: 'Tā shēngbìng le, zài jiālǐ xiūxi.',
      meaning: 'Anh ấy bị ốm rồi, đang nghỉ ngơi ở nhà.'
    }
  },
  {
    id: 'hsk2-11',
    hanzi: '药',
    pinyin: 'yào',
    meaning: 'Thuốc',
    level: 'HSK 2',
    category: 'Sức khỏe & Y tế',
    type: 'Danh từ',
    example: {
      hanzi: '吃药后多休息。',
      pinyin: 'Chī yào hòu duō xiūxi.',
      meaning: 'Sau khi uống thuốc hãy nghỉ ngơi nhiều.'
    }
  },
  {
    id: 'hsk2-12',
    hanzi: '机场',
    pinyin: 'jīchǎng',
    meaning: 'Sân bay, phi trường',
    level: 'HSK 2',
    category: 'Giao thông & Du lịch',
    type: 'Danh từ',
    example: {
      hanzi: '我现在要去机场接朋友。',
      pinyin: 'Wǒ xiànzài yào qù jīchǎng jiē péngyou.',
      meaning: 'Bây giờ tôi phải ra sân bay đón bạn.'
    }
  },
  {
    id: 'hsk2-13',
    hanzi: '旅游',
    pinyin: 'lǚyóu',
    meaning: 'Du lịch',
    level: 'HSK 2',
    category: 'Giao thông & Du lịch',
    type: 'Động từ',
    example: {
      hanzi: '去年我们去中国旅游。',
      pinyin: 'Qùnián wǒmen qù Zhōngguó lǚyóu.',
      meaning: 'Năm ngoái chúng tôi đi du lịch Trung Quốc.'
    }
  },
  {
    id: 'hsk2-14',
    hanzi: '便宜',
    pinyin: 'piányi',
    meaning: 'Rẻ',
    level: 'HSK 2',
    category: 'Mua sắm & Tiền tệ',
    type: 'Tính từ',
    example: {
      hanzi: '这件衣服又漂亮又便宜。',
      pinyin: 'Zhè jiàn yīfu yòu piàoliang yòu piányi.',
      meaning: 'Chiếc áo này vừa đẹp vừa rẻ.'
    }
  },
  {
    id: 'hsk2-15',
    hanzi: '贵',
    pinyin: 'guì',
    meaning: 'Đắt, quý',
    level: 'HSK 2',
    category: 'Mua sắm & Tiền tệ',
    type: 'Tính từ',
    example: {
      hanzi: '这家饭馆的菜有点贵。',
      pinyin: 'Zhè jiā fànguǎn de cài yǒudiǎn guì.',
      meaning: 'Món ăn của quán này hơi đắt.'
    }
  },

  // ==================== HSK 3 ====================
  {
    id: 'hsk3-01',
    hanzi: '打算',
    pinyin: 'dǎsuan',
    meaning: 'Dự định, tính toán',
    level: 'HSK 3',
    category: 'Thời gian & Ngày tháng',
    type: 'Động từ',
    example: {
      hanzi: '周末你有什么打算？',
      pinyin: 'Zhōumò nǐ yǒu shénme dǎsuan?',
      meaning: 'Cuối tuần bạn có dự định gì không?'
    }
  },
  {
    id: 'hsk3-02',
    hanzi: '决定',
    pinyin: 'juédìng',
    meaning: 'Quyết định',
    level: 'HSK 3',
    category: 'Cảm xúc & Tính cách',
    type: 'Động từ',
    example: {
      hanzi: '我已经决定去北京留学。',
      pinyin: 'Wǒ yǐjīng juédìng qù Běijīng liúxué.',
      meaning: 'Tôi đã quyết định đi du học Bắc Kinh.'
    }
  },
  {
    id: 'hsk3-03',
    hanzi: '解决',
    pinyin: 'jiějué',
    meaning: 'Giải quyết',
    level: 'HSK 3',
    category: 'Công việc & Nghề nghiệp',
    type: 'Động từ',
    example: {
      hanzi: '这个问题很容易解决。',
      pinyin: 'Zhè ge wèntí hěn róngyì jiějué.',
      meaning: 'Vấn đề này rất dễ giải quyết.'
    }
  },
  {
    id: 'hsk3-04',
    hanzi: '提高',
    pinyin: 'tígāo',
    meaning: 'Nâng cao, cải thiện',
    level: 'HSK 3',
    category: 'Trường học & Giáo dục',
    type: 'Động từ',
    example: {
      hanzi: '我的汉语水平提高了很多。',
      pinyin: 'Wǒ de Hànyǔ shuǐpíng tígāo le hěn duō.',
      meaning: 'Trình độ tiếng Trung của tôi đã tiến bộ nhiều.'
    }
  },
  {
    id: 'hsk3-05',
    hanzi: '练习',
    pinyin: 'liànxí',
    meaning: 'Luyện tập, bài tập',
    level: 'HSK 3',
    category: 'Trường học & Giáo dục',
    type: 'Động từ',
    example: {
      hanzi: '每天练习口语很有帮助。',
      pinyin: 'Měitiān liànxí kǒuyǔ hěn yǒu bāngzhù.',
      meaning: 'Mỗi ngày luyện khẩu ngữ rất có ích.'
    }
  },
  {
    id: 'hsk3-06',
    hanzi: '经理',
    pinyin: 'jīnglǐ',
    meaning: 'Giám đốc, quản lý',
    level: 'HSK 3',
    category: 'Công việc & Nghề nghiệp',
    type: 'Danh từ',
    example: {
      hanzi: '李经理正在办公室开会。',
      pinyin: 'Lǐ jīnglǐ zhèngzài bàngōngshì kāihuì.',
      meaning: 'Giám đốc Lý đang họp trong văn phòng.'
    }
  },
  {
    id: 'hsk3-07',
    hanzi: '同事',
    pinyin: 'tóngshì',
    meaning: 'Đồng nghiệp',
    level: 'HSK 3',
    category: 'Công việc & Nghề nghiệp',
    type: 'Danh từ',
    example: {
      hanzi: '我和同事们相处得很好。',
      pinyin: 'Wǒ hé tóngshìmen xiāngchǔ de hěn hǎo.',
      meaning: 'Tôi và các đồng nghiệp hòa thuận rất tốt.'
    }
  },
  {
    id: 'hsk3-08',
    hanzi: '地铁',
    pinyin: 'dìtiě',
    meaning: 'Tàu điện ngầm',
    level: 'HSK 3',
    category: 'Giao thông & Du lịch',
    type: 'Danh từ',
    example: {
      hanzi: '坐地铁去公司很方便。',
      pinyin: 'Zuò dìtiě qù gōngsī hěn fāngbiàn.',
      meaning: 'Đi tàu điện ngầm đến công ty rất thuận tiện.'
    }
  },
  {
    id: 'hsk3-09',
    hanzi: '护照',
    pinyin: 'hùzhào',
    meaning: 'Hộ chiếu',
    level: 'HSK 3',
    category: 'Giao thông & Du lịch',
    type: 'Danh từ',
    example: {
      hanzi: '出国前请检查护照。',
      pinyin: 'Chūguó qián qǐng jiǎnchá hùzhào.',
      meaning: 'Trước khi ra nước ngoài xin kiểm tra hộ chiếu.'
    }
  },
  {
    id: 'hsk3-10',
    hanzi: '信用卡',
    pinyin: 'xìnyòngkǎ',
    meaning: 'Thẻ tín dụng',
    level: 'HSK 3',
    category: 'Mua sắm & Tiền tệ',
    type: 'Danh từ',
    example: {
      hanzi: '这里可以用信用卡付款吗？',
      pinyin: 'Zhèlǐ kěyǐ yòng xìnyòngkǎ fùkuǎn ma?',
      meaning: 'Ở đây có thể thanh toán bằng thẻ tín dụng không?'
    }
  },
  {
    id: 'hsk3-11',
    hanzi: '热情',
    pinyin: 'rèqíng',
    meaning: 'Nhiệt tình, hiếu khách',
    level: 'HSK 3',
    category: 'Cảm xúc & Tính cách',
    type: 'Tính từ',
    example: {
      hanzi: '北京人非常热情好客。',
      pinyin: 'Běijīng rén fēicháng rèqíng hàokè.',
      meaning: 'Người Bắc Kinh rất nhiệt tình hiếu khách.'
    }
  },
  {
    id: 'hsk3-12',
    hanzi: '舒服',
    pinyin: 'shūfu',
    meaning: 'Thoải mái, dễ chịu',
    level: 'HSK 3',
    category: 'Sức khỏe & Y tế',
    type: 'Tính từ',
    example: {
      hanzi: '躺在沙发上真舒服。',
      pinyin: 'Tǎng zài shāfā shang zhēn shūfu.',
      meaning: 'Nằm trên ghế sô pha thật thoải mái.'
    }
  },

  // ==================== HSK 4 ====================
  {
    id: 'hsk4-01',
    hanzi: '经济',
    pinyin: 'jīngjì',
    meaning: 'Kinh tế',
    level: 'HSK 4',
    category: 'Kinh tế & Thương mại',
    type: 'Danh từ',
    example: {
      hanzi: '近几年中国经济发展迅速。',
      pinyin: 'Jìn jǐ nián Zhōngguó jīngjì fāzhǎn xùnsù.',
      meaning: 'Những năm gần đây kinh tế Trung Quốc phát triển nhanh chóng.'
    }
  },
  {
    id: 'hsk4-02',
    hanzi: '法律',
    pinyin: 'fǎlǜ',
    meaning: 'Pháp luật',
    level: 'HSK 4',
    category: 'Xã hội & Đời sống',
    type: 'Danh từ',
    example: {
      hanzi: '每个人都应该遵守法律。',
      pinyin: 'Měi ge rén dōu yīnggāi zūnshǒu fǎlǜ.',
      meaning: 'Mỗi người đều nên tuân thủ pháp luật.'
    }
  },
  {
    id: 'hsk4-03',
    hanzi: '科学',
    pinyin: 'kēxué',
    meaning: 'Khoa học',
    level: 'HSK 4',
    category: 'Khoa học & Công nghệ',
    type: 'Danh từ',
    example: {
      hanzi: '科学技术改变了我们的生活。',
      pinyin: 'Kēxué jìshù gǎibiàn le wǒmen de shēnghuó.',
      meaning: 'Khoa học công nghệ đã thay đổi cuộc sống của chúng ta.'
    }
  },
  {
    id: 'hsk4-04',
    hanzi: '经验',
    pinyin: 'jīngyàn',
    meaning: 'Kinh nghiệm',
    level: 'HSK 4',
    category: 'Công việc & Nghề nghiệp',
    type: 'Danh từ',
    example: {
      hanzi: '他在这个行业积累了丰富经验。',
      pinyin: 'Tā zài zhè ge hángyè jīlěi le fēngfù jīngyàn.',
      meaning: 'Anh ấy đã tích lũy kinh nghiệm phong phú trong ngành này.'
    }
  },
  {
    id: 'hsk4-05',
    hanzi: '态度',
    pinyin: 'tàidu',
    meaning: 'Thái độ',
    level: 'HSK 4',
    category: 'Cảm xúc & Tính cách',
    type: 'Danh từ',
    example: {
      hanzi: '态度决定一切。',
      pinyin: 'Tàidu juédìng yíqiè.',
      meaning: 'Thái độ quyết định tất cả.'
    }
  },
  {
    id: 'hsk4-06',
    hanzi: '坚持',
    pinyin: 'jiānchí',
    meaning: 'Kiên trì, bền bỉ',
    level: 'HSK 4',
    category: 'Cảm xúc & Tính cách',
    type: 'Động từ',
    example: {
      hanzi: '只要坚持努力，就一定能成功。',
      pinyin: 'Zhǐyào jiānchí nǔlì, jiù yídìng néng chénggōng.',
      meaning: 'Chỉ cần kiên trì nỗ lực, nhất định sẽ thành công.'
    }
  },
  {
    id: 'hsk4-07',
    hanzi: '交流',
    pinyin: 'jiāoliú',
    meaning: 'Giao lưu, trao đổi',
    level: 'HSK 4',
    category: 'Chào hỏi & Giao tiếp',
    type: 'Động từ',
    example: {
      hanzi: '多跟同事交流能增进了解。',
      pinyin: 'Duō gēn tóngshì jiāoliú néng zēngjìn liǎojiě.',
      meaning: 'Giao lưu nhiều với đồng nghiệp giúp tăng cường hiểu biết.'
    }
  },
  {
    id: 'hsk4-08',
    hanzi: '礼貌',
    pinyin: 'lǐmào',
    meaning: 'Lịch sự, lễ phép',
    level: 'HSK 4',
    category: 'Cảm xúc & Tính cách',
    type: 'Danh từ / Tính từ',
    example: {
      hanzi: '对长辈要讲礼貌。',
      pinyin: 'Duì zhǎngbèi yào jiǎng lǐmào.',
      meaning: 'Đối với người lớn tuổi cần phải lịch sự lễ phép.'
    }
  },
  {
    id: 'hsk4-09',
    hanzi: '顺便',
    pinyin: 'shùnbiàn',
    meaning: 'Nhân tiện, tiện thể',
    level: 'HSK 4',
    category: 'Xã hội & Đời sống',
    type: 'Phó từ',
    example: {
      hanzi: '你去超市顺便帮我买瓶牛奶吧。',
      pinyin: 'Nǐ qù chāoshì shùnbiàn bāng wǒ mǎi píng niúnǎi ba.',
      meaning: 'Bạn đi siêu thị nhân tiện mua giúp tôi hộp sữa nhé.'
    }
  },
  {
    id: 'hsk4-10',
    hanzi: '尽管',
    pinyin: 'jǐnguǎn',
    meaning: 'Mặc dù, dẫu cho',
    level: 'HSK 4',
    category: 'Xã hội & Đời sống',
    type: 'Liên từ',
    example: {
      hanzi: '尽管外面下着大雨，他依然准时到了。',
      pinyin: 'Jǐnguǎn wàimiàn xià zhe dàyǔ, tā yīrán zhǔnshí dào le.',
      meaning: 'Mặc dù bên ngoài mưa to, anh ấy vẫn đến đúng giờ.'
    }
  },

  // ==================== HSK 5 ====================
  {
    id: 'hsk5-01',
    hanzi: '投资',
    pinyin: 'tóuzī',
    meaning: 'Đầu tư',
    level: 'HSK 5',
    category: 'Kinh tế & Thương mại',
    type: 'Động từ / Danh từ',
    example: {
      hanzi: '投资新能源领域具有广阔前景。',
      pinyin: 'Tóuzī xīn néngyuán lǐngyù jùyǒu guǎngkuò qiánjǐng.',
      meaning: 'Đầu tư vào lĩnh vực năng lượng mới có triển vọng rộng lớn.'
    }
  },
  {
    id: 'hsk5-02',
    hanzi: '企业',
    pinyin: 'qǐyè',
    meaning: 'Doanh nghiệp, công ty',
    level: 'HSK 5',
    category: 'Kinh tế & Thương mại',
    type: 'Danh từ',
    example: {
      hanzi: '中小型企业是经济活力的重要来源。',
      pinyin: 'Zhōng xiǎoxíng qǐyè shì jīngjì huólì de zhòngyào láiyuán.',
      meaning: 'Doanh nghiệp vừa và nhỏ là nguồn sức sống quan trọng của nền kinh tế.'
    }
  },
  {
    id: 'hsk5-03',
    hanzi: '谈判',
    pinyin: 'tánpàn',
    meaning: 'Đàm phán, thương lượng',
    level: 'HSK 5',
    category: 'Kinh tế & Thương mại',
    type: 'Động từ',
    example: {
      hanzi: '双方经过艰苦谈判达成了共识。',
      pinyin: 'Shuāngfāng jīngguò jiānkǔ tánpàn dáchéng le gòngshí.',
      meaning: 'Hai bên sau đàm phán gian khổ đã đạt được sự đồng thuận.'
    }
  },
  {
    id: 'hsk5-04',
    hanzi: '合同',
    pinyin: 'hétong',
    meaning: 'Hợp đồng',
    level: 'HSK 5',
    category: 'Kinh tế & Thương mại',
    type: 'Danh từ',
    example: {
      hanzi: '签字前务必仔细审查合同条款。',
      pinyin: 'Qiānzì qián wùbì zǐxì shěnchá hétong tiáokuǎn.',
      meaning: 'Trước khi ký nhất định phải kiểm tra kỹ các điều khoản hợp đồng.'
    }
  },
  {
    id: 'hsk5-05',
    hanzi: '挑战',
    pinyin: 'tiǎozhàn',
    meaning: 'Thách thức',
    level: 'HSK 5',
    category: 'Công việc & Nghề nghiệp',
    type: 'Danh từ / Động từ',
    example: {
      hanzi: '面对新的挑战，我们要勇往直前。',
      pinyin: 'Miànduì xīn de tiǎozhàn, wǒmen yào yǒngwǎngzhíqián.',
      meaning: 'Đối mặt với thách thức mới, chúng ta cần dũng cảm tiến lên.'
    }
  },
  {
    id: 'hsk5-06',
    hanzi: '深刻',
    pinyin: 'shēnkè',
    meaning: 'Sâu sắc, sâu đậm',
    level: 'HSK 5',
    category: 'Cảm xúc & Tính cách',
    type: 'Tính từ',
    example: {
      hanzi: '这次经历给我留下了深刻的印象。',
      pinyin: 'Zhè cì jīnglì gěi wǒ liú xià le shēnkè de yìnxiàng.',
      meaning: 'Trải nghiệm lần này đã để lại cho tôi ấn tượng sâu sắc.'
    }
  },
  {
    id: 'hsk5-07',
    hanzi: '谨慎',
    pinyin: 'jǐnshèn',
    meaning: 'Cẩn trọng, thận trọng',
    level: 'HSK 5',
    category: 'Cảm xúc & Tính cách',
    type: 'Tính từ',
    example: {
      hanzi: '在重大决策面前必须保持谨慎。',
      pinyin: 'Zài zhòngdà juécè miànqián bìxū bǎochí jǐnshèn.',
      meaning: 'Trước quyết định quan trọng phải giữ thái độ cẩn trọng.'
    }
  },
  {
    id: 'hsk5-08',
    hanzi: '哲理',
    pinyin: 'zhélǐ',
    meaning: 'Triết lý',
    level: 'HSK 5',
    category: 'Thành ngữ & Triết lý',
    type: 'Danh từ',
    example: {
      hanzi: '这则寓言蕴含着深刻的人生哲理。',
      pinyin: 'Zhè zé yùyán yùnhán zhe shēnkè de rénshēng zhélǐ.',
      meaning: 'Câu chuyện ngụ ngôn này hàm chứa triết lý nhân sinh sâu sắc.'
    }
  },

  // ==================== HSK 6 ====================
  {
    id: 'hsk6-01',
    hanzi: '潜移默化',
    pinyin: 'qián yí mò huà',
    meaning: 'Thấm nhuần ngấm dần (ảnh hưởng vô hình)',
    level: 'HSK 6',
    category: 'Thành ngữ & Triết lý',
    type: 'Thành ngữ',
    example: {
      hanzi: '优秀的文学作品对读者有着潜移默化的熏陶。',
      pinyin: 'Yōuxiù de wénxué zuòpǐn duì dúzhě yǒu zhe qián yí mò huà de xūntáo.',
      meaning: 'Tác phẩm văn học xuất sắc có tác động thấm nhuần tự nhiên đến độc giả.'
    }
  },
  {
    id: 'hsk6-02',
    hanzi: '未雨绸缪',
    pinyin: 'wèi yǔ chóu móu',
    meaning: 'Phòng ngừa chu đáo trước khi xảy ra sự cố',
    level: 'HSK 6',
    category: 'Thành ngữ & Triết lý',
    type: 'Thành ngữ',
    example: {
      hanzi: '企业应当未雨绸缪，建立健全风险防范机制。',
      pinyin: 'Qǐyè yīngdāng wèi yǔ chóu móu, jiànlì jiànquán fēngxiǎn fángfàn jīzhì.',
      meaning: 'Doanh nghiệp nên phòng ngừa trước, xây dựng cơ chế đề phòng rủi ro vững chắc.'
    }
  },
  {
    id: 'hsk6-03',
    hanzi: '循序渐进',
    pinyin: 'xún xù jiàn jìn',
    meaning: 'Tuần tự từng bước, tiến bộ bài bản',
    level: 'HSK 6',
    category: 'Thành ngữ & Triết lý',
    type: 'Thành ngữ',
    example: {
      hanzi: '学习汉语必须循序渐进，不可急于求成。',
      pinyin: 'Xuéxí Hànyǔ bìxū xún xù jiàn jìn, bù kě jí yú qiú chéng.',
      meaning: 'Học tiếng Hán phải đi từng bước bài bản, không được nóng vội cầu thành.'
    }
  },
  {
    id: 'hsk6-04',
    hanzi: '一丝不苟',
    pinyin: 'yì sī bù gǒu',
    meaning: 'Cẩn thận tỉ mỉ, không chút cẩu thả',
    level: 'HSK 6',
    category: 'Thành ngữ & Triết lý',
    type: 'Thành ngữ',
    example: {
      hanzi: '老科学家对学术研究一丝不苟。',
      pinyin: 'Lǎo kēxuéjiā duì xuéshù yánjiū yì sī bù gǒu.',
      meaning: 'Nhà khoa học lão thành đối với nghiên cứu học thuật luôn tỉ mỉ chu đáo.'
    }
  },
  {
    id: 'hsk6-05',
    hanzi: '阐述',
    pinyin: 'chǎnshù',
    meaning: 'Trình bày rõ ràng, luận giải sâu',
    level: 'HSK 6',
    category: 'Khoa học & Công nghệ',
    type: 'Động từ',
    example: {
      hanzi: '报告深刻阐述了新时代可持续发展的核心理念。',
      pinyin: 'Bàogào shēnkè chǎnshù le xīn shídài kěchíxù fāzhǎn de héxīn lǐniàn.',
      meaning: 'Báo cáo đã luận giải sâu sắc triết lý cốt lõi của sự phát triển bền vững thời đại mới.'
    }
  },
  {
    id: 'hsk6-06',
    hanzi: '统筹',
    pinyin: 'tǒngchóu',
    meaning: 'Quy hoạch tổng thể, điều phối chung',
    level: 'HSK 6',
    category: 'Kinh tế & Thương mại',
    type: 'Động từ',
    example: {
      hanzi: '必须统筹兼顾经济发展与生态环境保护。',
      pinyin: 'Bìxū tǒngchóu jiāngù jīngjì fāzhǎn yǔ shēngtài huánjìng bǎohù.',
      meaning: 'Phải quy hoạch tổng thể hài hòa giữa phát triển kinh tế và bảo vệ môi trường sinh thái.'
    }
  },
  {
    id: 'hsk6-07',
    hanzi: '颠覆',
    pinyin: 'diānfù',
    meaning: 'Đảo lộn, lật đổ, đột phá căn bản',
    level: 'HSK 6',
    category: 'Khoa học & Công nghệ',
    type: 'Động từ',
    example: {
      hanzi: '人工智能正在颠覆众多传统产业格局。',
      pinyin: 'Réngōng zhìnéng zhèngzài diānfù zhòngduō chuántǒng chǎnyè géjú.',
      meaning: 'Trí tuệ nhân tạo đang làm đảo lộn cấu trúc của hàng loạt ngành công nghiệp truyền thống.'
    }
  },
  {
    id: 'hsk6-08',
    hanzi: '繁荣',
    pinyin: 'fánróng',
    meaning: 'Phồn vinh, hưng thịnh',
    level: 'HSK 6',
    category: 'Kinh tế & Thương mại',
    type: 'Tính từ / Động từ',
    example: {
      hanzi: '共同促进区域经济的长期稳定与繁荣。',
      pinyin: 'Gòngtóng cùjìn qūyù jīngjì de chángqī wěndìng yǔ fánróng.',
      meaning: 'Cùng nhau thúc đẩy sự ổn định và phồn vinh lâu dài của kinh tế khu vực.'
    }
  }
];

// PRE-BUILT VOCABULARY DECKS (BỘ TỪ VỰNG MẪU HSK 1 ĐẾN HSK 6)
const DEFAULT_DECKS = [
  {
    id: 'deck-hsk1-core',
    title: 'Bộ từ HSK 1 Cốt Lõi',
    description: 'Từ vựng nền tảng chào hỏi, xưng hô, ăn uống và sinh hoạt hàng ngày.',
    level: 'HSK 1',
    icon: '🌱',
    wordIds: ['hsk1-01', 'hsk1-02', 'hsk1-03', 'hsk1-04', 'hsk1-05', 'hsk1-06', 'hsk1-07', 'hsk1-08', 'hsk1-09', 'hsk1-10', 'hsk1-11', 'hsk1-12', 'hsk1-13', 'hsk1-14', 'hsk1-15', 'hsk1-16', 'hsk1-17', 'hsk1-18', 'hsk1-19', 'hsk1-20', 'hsk1-21', 'hsk1-22', 'hsk1-23', 'hsk1-24', 'hsk1-25']
  },
  {
    id: 'deck-hsk2-daily',
    title: 'Bộ từ HSK 2 Đời Sống',
    description: 'Mở rộng giao tiếp gia đình, thể thao, mua sắm và đi lại du lịch.',
    level: 'HSK 2',
    icon: '🌿',
    wordIds: ['hsk2-01', 'hsk2-02', 'hsk2-03', 'hsk2-04', 'hsk2-05', 'hsk2-06', 'hsk2-07', 'hsk2-08', 'hsk2-09', 'hsk2-10', 'hsk2-11', 'hsk2-12', 'hsk2-13', 'hsk2-14', 'hsk2-15']
  },
  {
    id: 'deck-hsk3-travel',
    title: 'Bộ từ HSK 3 Học Tập & Công Sở',
    description: 'Nâng cao trình độ, thảo luận công việc, văn phòng và giao dịch cơ bản.',
    level: 'HSK 3',
    icon: '🌲',
    wordIds: ['hsk3-01', 'hsk3-02', 'hsk3-03', 'hsk3-04', 'hsk3-05', 'hsk3-06', 'hsk3-07', 'hsk3-08', 'hsk3-09', 'hsk3-10', 'hsk3-11', 'hsk3-12']
  },
  {
    id: 'deck-hsk4-business',
    title: 'Bộ từ HSK 4 Xã Hội & Pháp Lý',
    description: 'Từ vựng chuyên sâu về kinh tế, pháp luật, khoa học và thái độ sống.',
    level: 'HSK 4',
    icon: '📘',
    wordIds: ['hsk4-01', 'hsk4-02', 'hsk4-03', 'hsk4-04', 'hsk4-05', 'hsk4-06', 'hsk4-07', 'hsk4-08', 'hsk4-09', 'hsk4-10']
  },
  {
    id: 'deck-hsk5-advanced',
    title: 'Bộ từ HSK 5 Cao Cấp & Đàm Phán',
    description: 'Thương mại quốc tế, hợp đồng, thách thức doanh nghiệp và tư duy logic.',
    level: 'HSK 5',
    icon: '📕',
    wordIds: ['hsk5-01', 'hsk5-02', 'hsk5-03', 'hsk5-04', 'hsk5-05', 'hsk5-06', 'hsk5-07', 'hsk5-08']
  },
  {
    id: 'deck-hsk6-mastery',
    title: 'Bộ từ HSK 6 Thành Ngữ & Đỉnh Cao',
    description: 'Thành ngữ 4 chữ uyên bác, thuật ngữ học thuật và tư duy chiến lược tầm vĩ mô.',
    level: 'HSK 6',
    icon: '👑',
    wordIds: ['hsk6-01', 'hsk6-02', 'hsk6-03', 'hsk6-04', 'hsk6-05', 'hsk6-06', 'hsk6-07', 'hsk6-08']
  }
];

// 2. EXERCISE TYPE: NHÌN HÌNH PHÁN ĐOÁN ĐÚNG SAI (With Level Tags)
const IMAGE_TRUE_FALSE_EXERCISES = [
  {
    id: 'itf-1',
    level: 'HSK 1',
    category: 'Đồ ăn & Thức uống',
    svg: `<svg viewBox="0 0 200 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="teaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#b45309"/>
        </linearGradient>
      </defs>
      <rect width="200" height="160" rx="16" fill="#fef3c7"/>
      <ellipse cx="100" cy="130" rx="65" ry="14" fill="#cbd5e1"/>
      <ellipse cx="100" cy="128" rx="55" ry="10" fill="#f8fafc"/>
      <path d="M 130 70 C 165 70 165 110 130 110" fill="none" stroke="#e2e8f0" stroke-width="12" stroke-linecap="round"/>
      <path d="M 60 60 L 72 120 C 73 125 127 125 128 120 L 140 60 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
      <ellipse cx="100" cy="68" rx="36" ry="12" fill="url(#teaGrad)"/>
      <path d="M 85 45 Q 80 35 88 25 Q 92 18 85 10" fill="none" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round" opacity="0.85"/>
      <path d="M 105 48 Q 112 38 104 28 Q 98 20 106 12" fill="none" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round" opacity="0.85"/>
      <circle cx="100" cy="95" r="14" fill="#dcfce7"/>
      <text x="100" y="100" font-size="12" text-anchor="middle" fill="#166534" font-weight="bold">茶</text>
    </svg>`,
    statement: '这是一杯茶。',
    pinyin: 'Zhè shì yì bēi chá.',
    meaning: 'Đây là một tách trà.',
    isCorrect: true,
    explanation: 'Hình minh họa là một tách trà nóng bốc khói có chữ 茶 (Trà). Nhận định là ĐÚNG (正确).'
  },
  {
    id: 'itf-2',
    level: 'HSK 1',
    category: 'Đồ ăn & Thức uống',
    svg: `<svg viewBox="0 0 200 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" rx="16" fill="#fee2e2"/>
      <ellipse cx="100" cy="138" rx="45" ry="10" fill="#fca5a5" opacity="0.6"/>
      <path d="M 100 45 C 80 30 55 50 55 85 C 55 125 90 135 100 135 C 110 135 145 125 145 85 C 145 50 120 30 100 45 Z" fill="#ef4444"/>
      <path d="M 75 55 C 65 65 65 85 68 95" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity="0.5"/>
      <path d="M 100 45 Q 103 28 112 22" fill="none" stroke="#78350f" stroke-width="5" stroke-linecap="round"/>
      <path d="M 104 36 C 118 30 130 35 128 42 C 120 48 108 42 104 36 Z" fill="#22c55e"/>
    </svg>`,
    statement: '这是西瓜。',
    pinyin: 'Zhè shì xīguā.',
    meaning: 'Đây là quả dưa hấu.',
    isCorrect: false,
    explanation: 'Hình vẽ là quả táo đỏ (苹果 - píngguǒ), không phải dưa hấu (西瓜 - xīguā). Nhận định là SAI (错误).'
  },
  {
    id: 'itf-3',
    level: 'HSK 2',
    category: 'Thể thao & Giải trí',
    svg: `<svg viewBox="0 0 200 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" rx="16" fill="#e0f2fe"/>
      <path d="M 0 100 Q 50 90 100 100 T 200 100 L 200 160 L 0 160 Z" fill="#38bdf8"/>
      <circle cx="115" cy="72" r="14" fill="#fde047"/>
      <rect x="118" y="70" width="12" height="6" rx="3" fill="#0f172a"/>
      <path d="M 95 85 C 85 70 95 50 115 52 C 125 53 140 60 148 68" fill="none" stroke="#fbcfe8" stroke-width="9" stroke-linecap="round"/>
      <path d="M 75 92 Q 95 85 110 88" stroke="#0284c7" stroke-width="14" stroke-linecap="round"/>
    </svg>`,
    statement: '他在游泳。',
    pinyin: 'Tā zài yóuyǒng.',
    meaning: 'Anh ấy đang bơi lội.',
    isCorrect: true,
    explanation: 'Hình ảnh vẽ người đang bơi lội trong làn nước (游泳 - yóuyǒng). Nhận định là ĐÚNG (正确).'
  },
  {
    id: 'itf-4',
    level: 'HSK 3',
    category: 'Giao thông & Du lịch',
    svg: `<svg viewBox="0 0 200 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" rx="16" fill="#f0fdf4"/>
      <rect x="50" y="45" width="100" height="75" rx="14" fill="#059669"/>
      <rect x="60" y="55" width="80" height="30" rx="6" fill="#dcfce7"/>
      <circle cx="70" cy="102" r="6" fill="#fef08a"/>
      <circle cx="130" cy="102" r="6" fill="#fef08a"/>
      <line x1="30" y1="135" x2="170" y2="135" stroke="#475569" stroke-width="6"/>
      <text x="100" y="75" font-size="12" text-anchor="middle" fill="#065f46" font-weight="bold">SUBWAY</text>
    </svg>`,
    statement: '坐地铁出行既快又准时。',
    pinyin: 'Zuò dìtiě chūxíng jì kuài yòu zhǔnshí.',
    meaning: 'Đi tàu điện ngầm vừa nhanh lại vừa đúng giờ.',
    isCorrect: true,
    explanation: 'Hình minh họa là tàu điện ngầm (地铁 - dìtiě). Nhận định là ĐÚNG (正确).'
  },
  {
    id: 'itf-5',
    level: 'HSK 4',
    category: 'Khoa học & Công nghệ',
    svg: `<svg viewBox="0 0 200 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" rx="16" fill="#f5f3ff"/>
      <rect x="50" y="40" width="100" height="65" rx="6" fill="#334155"/>
      <rect x="55" y="45" width="90" height="55" rx="4" fill="#0284c7"/>
      <path d="M 65 85 L 80 70 L 105 80 L 130 55" fill="none" stroke="#22c55e" stroke-width="4"/>
      <polygon points="40,110 160,110 150,118 50,118" fill="#94a3b8"/>
    </svg>`,
    statement: '笔记本电脑与科技让工作更高效。',
    pinyin: 'Bǐjìběn diànnǎo yǔ kējì ràng gōngzuò gèng gāoxiào.',
    meaning: 'Máy tính xách tay và công nghệ giúp công việc đạt hiệu suất cao hơn.',
    isCorrect: true,
    explanation: 'Hình minh họa máy tính và biểu đồ tăng trưởng công nghệ. Nhận định là ĐÚNG (正确).'
  },
  {
    id: 'itf-6',
    level: 'HSK 5',
    category: 'Kinh tế & Thương mại',
    svg: `<svg viewBox="0 0 200 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" rx="16" fill="#fff7ed"/>
      <rect x="65" y="35" width="70" height="90" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="3"/>
      <line x1="75" y1="50" x2="125" y2="50" stroke="#94a3b8" stroke-width="3"/>
      <line x1="75" y1="65" x2="125" y2="65" stroke="#94a3b8" stroke-width="3"/>
      <line x1="75" y1="80" x2="110" y2="80" stroke="#94a3b8" stroke-width="3"/>
      <circle cx="115" cy="100" r="10" fill="#dc2626"/>
      <text x="115" y="104" font-size="10" text-anchor="middle" fill="#ffffff" font-weight="bold">印</text>
    </svg>`,
    statement: '这是一份商业合同。',
    pinyin: 'Zhè shì yí fèn shāngyè hétong.',
    meaning: 'Đây là một bản hợp đồng thương mại.',
    isCorrect: true,
    explanation: 'Hình minh họa văn bản có đóng dấu đỏ (合同 - hétong). Nhận định là ĐÚNG (正确).'
  }
];

// 3. EXERCISE TYPE: ĐỌC CÂU HỎI CHỌN CÂU TRẢ LỜI ĐÚNG (With Level Tags)
const READING_COMPREHENSION_EXERCISES = [
  {
    id: 'rc-1',
    level: 'HSK 1',
    category: 'Trường học & Giáo dục',
    passage: '大卫是美国人，他在北京学习汉语。他每天早上七点半起床，八点去教室上课。中午他和中国同学一起在学校食堂吃饭。他很喜欢吃中国菜。',
    passagePinyin: 'Dàwèi shì Měiguó rén, tā zài Běijīng xuéxí Hànyǔ. Tā měitiān zǎoshang qī diǎn bàn qǐchuáng, bā diǎn qù jiàoshì shàngkè. Zhōngwǔ tā hé Zhōngguó tóngxué yìqǐ zài xuéxiào shítáng chī fàn. Tā hěn xǐhuan chī Zhōngguó cài.',
    passageMeaning: 'David là người Mỹ, anh ấy học tiếng Trung ở Bắc Kinh. Hàng ngày anh thức dậy lúc 7:30 sáng, 8:00 đến lớp học. Buổi trưa anh ăn cơm cùng các bạn học Trung Quốc ở nhà ăn trường học. Anh ấy rất thích món Trung Quốc.',
    question: '大卫每天几点去教室上课？',
    questionPinyin: 'Dàwèi měitiān jǐ diǎn qù jiàoshì shàngkè?',
    questionMeaning: 'David mỗi ngày mấy giờ đến phòng học lên lớp?',
    options: [
      { text: '七点半 (7:30)' },
      { text: '八点 (8:00)' },
      { text: '八点半 (8:30)' },
      { text: '中午十二点 (12:00)' }
    ],
    answerIndex: 1,
    explanation: 'Đoạn văn nêu: "八点去教室上课" (8 giờ đến phòng học lên lớp).'
  },
  {
    id: 'rc-2',
    level: 'HSK 2',
    category: 'Giao thông & Du lịch',
    passage: '李老师的家离学校不远。她每天走路去学校，不用坐出租车。李老师非常爱她的学生，同学们也都很喜欢她。',
    passagePinyin: 'Lǐ lǎoshī de jiā lí xuéxiào bù yuǎn. Tā měitiān zǒulù qù xuéxiào, bú yòng zuò chūzūchē. Lǐ lǎoshī fēicháng ài tā de xuésheng, tóngxuémen yě dōu hěn xǐhuan tā.',
    passageMeaning: 'Nhà của cô giáo Lý cách trường học không xa. Cô ấy mỗi ngày đều đi bộ đến trường, không cần đi taxi.',
    question: '李老师每天怎么去学校？',
    questionPinyin: 'Lǐ lǎoshī měitiān zěnme qù xuéxiào?',
    questionMeaning: 'Cô giáo Lý mỗi ngày đi đến trường bằng cách nào?',
    options: [
      { text: '坐出租车 (Đi taxi)' },
      { text: '坐公共汽车 (Đi xe buýt)' },
      { text: '走路 (Đi bộ)' },
      { text: '骑自行车 (Đi xe đạp)' }
    ],
    answerIndex: 2,
    explanation: 'Đoạn văn nêu rõ: "她每天走路去学校，不用坐出租车" (Đi bộ).'
  },
  {
    id: 'rc-3',
    level: 'HSK 3',
    category: 'Công việc & Nghề nghiệp',
    passage: '王经理这周非常忙，因为公司下周要跟外国客户签订一份重要合同。他每天加班到晚上九点，希望能做好充分准备。',
    passagePinyin: 'Wáng jīnglǐ zhè zhōu fēicháng máng, yīnwèi gōngsī xià zhōu yào gēn wàiguó kèhù qiāndìng yí fèn zhòngyào hétong. Tā měitiān jiābān dào wǎnshang jiǔ diǎn, xīwàng néng zuò hǎo chōngfèn zhǔnbèi.',
    passageMeaning: 'Giám đốc Vương tuần này rất bận rộn vì công ty tuần tới phải ký hợp đồng quan trọng với khách nước ngoài. Anh ấy tăng ca đến 9h tối mỗi ngày để chuẩn bị kỹ lưỡng.',
    question: '王经理为什么每天加班？',
    questionPinyin: 'Wáng jīnglǐ wèishénme měitiān jiābān?',
    questionMeaning: 'Vì sao giám đốc Vương mỗi ngày đều tăng ca?',
    options: [
      { text: '准备去国外旅游 (Chuẩn bị du lịch nước ngoài)' },
      { text: '准备签订重要合同 (Chuẩn bị ký hợp đồng quan trọng)' },
      { text: '跟同事去运动 (Đi tập thể thao cùng đồng nghiệp)' },
      { text: '学习汉语口语 (Học khẩu ngữ tiếng Hán)' }
    ],
    answerIndex: 1,
    explanation: 'Đoạn văn viết: "因为公司下周要跟外国客户签订一份重要合同，希望能做好充分准备".'
  },
  {
    id: 'rc-4',
    level: 'HSK 4',
    category: 'Khoa học & Công nghệ',
    passage: '互联网技术的普及极大地改变了人们的生活方式。现在无论购物、订餐还是学习，只要有一部智能手机就能轻松搞定，节省了大量时间。',
    passagePinyin: 'Hùliánwǎng jìshù de pǔjí jídà de gǎibiàn le rénmen de shēnghuó fāngshì. Xiànzài wúlùn gòuwù, dìngcān háishì xuéxí, zhǐyào yǒu yí bù zhìnéng shǒujī jiù néng qīngsōng gǎodìng, jiéshěng le dàliàng shíjiān.',
    passageMeaning: 'Sự phổ cập của internet đã thay đổi sâu sắc lối sống con người. Giờ đây mua sắm, gọi đồ ăn hay học tập chỉ cần một chiếc smartphone là xong, tiết kiệm rất nhiều thời gian.',
    question: '根据这段话，智能手机给人们带来了什么好处？',
    questionPinyin: 'Gēnjù zhè duàn huà, zhìnéng shǒujī gěi rénmen dàilái le shénme hǎochu?',
    questionMeaning: 'Theo đoạn văn, smartphone mang lại lợi ích gì cho con người?',
    options: [
      { text: '让生活更轻松便利 (Cuộc sống nhẹ nhàng tiện lợi hơn)' },
      { text: '让人不想工作 (Làm con người lười làm việc)' },
      { text: '减少了人际交流 (Làm giảm giao tiếp con người)' },
      { text: '手机价格变得很贵 (Điện thoại trở nên đắt đỏ)' }
    ],
    answerIndex: 0,
    explanation: 'Đoạn văn nêu bật: "只要有一部智能手机就能轻松搞定，节省了大量时间" -> mang lại sự tiện lợi, nhanh chóng.'
  },
  {
    id: 'rc-5',
    level: 'HSK 5',
    category: 'Kinh tế & Thương mại',
    passage: '在激烈的市场竞争中，企业仅凭价格优势已经很难立足，必须依靠技术创新与优质服务来提高核心竞争力，才能赢得消费者的长期信赖。',
    passagePinyin: 'Zài jīliè de shìchǎng jìngzhēng zhōng, qǐyè jǐn píng jiàgé yōushì yǐjīng hěn nán lìzú, bìxū yīkào jìshù chuàngxīn yǔ yōuzhì fúwù lái tígāo héxīn jìngzhēnglì, cáinéng yíngdé xiāofèizhě de chángqī xìnlài.',
    passageMeaning: 'Trong cạnh tranh khốc liệt, doanh nghiệp chỉ dựa vào lợi thế giá cả đã khó trụ vững, mà phải dựa vào sáng tạo kỹ thuật và dịch vụ vượt trội để nâng cao sức cạnh tranh cốt lõi.',
    question: '企业要想赢得长期信赖，关键要依靠什么？',
    questionPinyin: 'Qǐyè yào xiǎng yíngdé chángqī xìnlài, guānjiàn yào yīkào shénme?',
    questionMeaning: 'Doanh nghiệp muốn giành được niềm tin lâu dài, then chốt phải dựa vào điều gì?',
    options: [
      { text: '降低产品价格 (Hạ giá sản phẩm)' },
      { text: '技术创新与优质服务 (Sáng tạo công nghệ & dịch vụ ưu việt)' },
      { text: '扩大广告宣传 (Mở rộng quảng cáo)' },
      { text: '减少员工数量 (Cắt giảm nhân viên)' }
    ],
    answerIndex: 1,
    explanation: 'Đoạn văn khẳng định: "必须依靠技术创新与优质服务来提高核心竞争力".'
  },
  {
    id: 'rc-6',
    level: 'HSK 6',
    category: 'Thành ngữ & Triết lý',
    passage: '成大事者，贵在未雨绸缪与持之以恒。如果急功近利、浅尝辄止，终究难成大器。唯有循序渐进、一丝不苟，方能在千锤百炼中铸就辉煌。',
    passagePinyin: 'Chéng dà shì zhě, guì zài wèi yǔ chóu móu yǔ chí zhī yǐ héng. Rúguǒ jígōngjìnlì, qiǎnchángzhézhǐ, zhōngjiū nán chéng dà qì. Wéi yǒu xún xù jiàn jìn, yì sī bù gǒu, fāng néng zài qiān chuí bǎi liàn zhōng zhù jiù huīhuáng.',
    passageMeaning: 'Người làm việc lớn, quý ở chỗ biết phòng ngừa chu đáo và kiên trì đến cùng. Nếu hám lợi trước mắt, nếm thử rồi dừng thì khó thành đại nghiệp.',
    question: '文中强调成功的关键态度是什么？',
    questionPinyin: 'Wén zhōng qiángdiào chénggōng de guānjiàn tàidu shì shénme?',
    questionMeaning: 'Thái độ then chốt để thành công được nhấn mạnh trong bài là gì?',
    options: [
      { text: '急功近利 (Hám lợi trước mắt)' },
      { text: '随遇而安 (Tùy cơ ứng biến qua ngày)' },
      { text: '循序渐进与坚持不懈 (Tuần tự bài bản & kiên trì không ngừng)' },
      { text: '等待好运降临 (Chờ vận may)' }
    ],
    answerIndex: 2,
    explanation: 'Bài viết đúc kết: "唯有循序渐进、一丝不苟，贵在未雨绸缪与持之以恒".'
  }
];

// 4. EXERCISE TYPE: CHỌN BỘ TỪ ĐIỀN VÀO ĐOẠN VĂN (Cloze Passages)
const CLOZE_PASSAGES_EXERCISES = [
  {
    id: 'cloze-1',
    level: 'HSK 1',
    title: 'Một ngày của tôi (HSK 1)',
    textParts: [
      '今天天气非常',
      '。我和朋友一起去',
      '买东西。我们买了几个红',
      '，大家都非常',
      '。'
    ],
    blankCount: 4,
    wordBank: [
      { key: 'A', hanzi: '好', pinyin: 'hǎo', meaning: 'tốt, đẹp' },
      { key: 'B', hanzi: '商店', pinyin: 'shāngdiàn', meaning: 'cửa hàng' },
      { key: 'C', hanzi: '苹果', pinyin: 'píngguǒ', meaning: 'quả táo' },
      { key: 'D', hanzi: '高兴', pinyin: 'gāoxìng', meaning: 'vui mừng' }
    ],
    correctAnswers: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
    fullText: '今天天气非常好 (A)。我和朋友一起去商店 (B) 买东西。我们买了几个红苹果 (C)，大家都非常高兴 (D)。',
    translation: 'Hôm nay thời tiết rất đẹp. Tôi và bạn cùng nhau đến cửa hàng mua đồ. Chúng tôi đã mua mấy quả táo đỏ, mọi người đều vô cùng vui vẻ.'
  },
  {
    id: 'cloze-2',
    level: 'HSK 2',
    title: 'Tại bệnh viện (HSK 2)',
    textParts: [
      '大卫昨天',
      '了，今天早上他去',
      '看病。',
      '告诉他要多喝水、多',
      '。'
    ],
    blankCount: 4,
    wordBank: [
      { key: 'A', hanzi: '生病', pinyin: 'shēngbìng', meaning: 'bị ốm' },
      { key: 'B', hanzi: '医院', pinyin: 'yīyuàn', meaning: 'bệnh viện' },
      { key: 'C', hanzi: '医生', pinyin: 'yīshēng', meaning: 'bác sĩ' },
      { key: 'D', hanzi: '休息', pinyin: 'xiūxi', meaning: 'nghỉ ngơi' }
    ],
    correctAnswers: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
    fullText: '大卫昨天生病 (A) 了，今天早上他去医院 (B) 看病。医生 (C) 告诉他要多喝水、多休息 (D)。',
    translation: 'David hôm qua bị ốm rồi, sáng nay anh ấy đến bệnh viện khám. Bác sĩ bảo anh phải uống nhiều nước, nghỉ ngơi nhiều.'
  },
  {
    id: 'cloze-3',
    level: 'HSK 3',
    title: 'Học tập & Rèn luyện (HSK 3)',
    textParts: [
      '为了',
      '自己的汉语水平，王朋每天都认真',
      '。他',
      '今年报名参加 HSK 3 级',
      '。'
    ],
    blankCount: 4,
    wordBank: [
      { key: 'A', hanzi: '提高', pinyin: 'tígāo', meaning: 'nâng cao' },
      { key: 'B', hanzi: '练习', pinyin: 'liànxí', meaning: 'luyện tập' },
      { key: 'C', hanzi: '打算', pinyin: 'dǎsuan', meaning: 'dự định' },
      { key: 'D', hanzi: '考试', pinyin: 'kǎoshì', meaning: 'kỳ thi' }
    ],
    correctAnswers: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
    fullText: '为了提高 (A) 自己的汉语水平，王朋每天都认真练习 (B)。他打算 (C) 今年报名参加 HSK 3 级考试 (D)。',
    translation: 'Để nâng cao trình độ tiếng Hán của mình, Vương Bằng mỗi ngày đều chăm chỉ luyện tập. Anh ấy dự định năm nay đăng ký thi HSK 3.'
  },
  {
    id: 'cloze-4',
    level: 'HSK 4',
    title: 'Bí quyết thành công (HSK 4)',
    textParts: [
      '在工作中，积极的',
      '非常重要。只要我们能够',
      '努力，不轻易',
      '，就一定能够取得',
      '。'
    ],
    blankCount: 4,
    wordBank: [
      { key: 'A', hanzi: '态度', pinyin: 'tàidu', meaning: 'thái độ' },
      { key: 'B', hanzi: '坚持', pinyin: 'jiānchí', meaning: 'kiên trì' },
      { key: 'C', hanzi: '放弃', pinyin: 'fàngqì', meaning: 'từ bỏ' },
      { key: 'D', hanzi: '成功', pinyin: 'chénggōng', meaning: 'thành công' }
    ],
    correctAnswers: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
    fullText: '在工作中，积极的态度 (A) 非常重要。只要我们能够坚持 (B) 努力，不轻易放弃 (C)，就一定能够取得成功 (D)。',
    translation: 'Trong công việc, thái độ tích cực rất quan trọng. Chỉ cần chúng ta kiên trì nỗ lực, không dễ dàng bỏ cuộc, nhất định sẽ gặt hái thành công.'
  },
  {
    id: 'cloze-5',
    level: 'HSK 5',
    title: 'Hợp tác kinh doanh (HSK 5)',
    textParts: [
      '经过长达三天的商务',
      '，两家',
      '终于就合作细则达成了一致，并正式',
      '了战略合作',
      '。'
    ],
    blankCount: 4,
    wordBank: [
      { key: 'A', hanzi: '谈判', pinyin: 'tánpàn', meaning: 'đàm phán' },
      { key: 'B', hanzi: '企业', pinyin: 'qǐyè', meaning: 'doanh nghiệp' },
      { key: 'C', hanzi: '签订', pinyin: 'qiāndìng', meaning: 'ký kết' },
      { key: 'D', hanzi: '合同', pinyin: 'hétong', meaning: 'hợp đồng' }
    ],
    correctAnswers: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
    fullText: '经过长达三天的商务谈判 (A)，两家企业 (B) 终于就合作细则达成了一致，并正式签订 (C) 了战略合作合同 (D)。',
    translation: 'Sau đàm phán thương mại kéo dài 3 ngày, hai doanh nghiệp đã thống nhất điều khoản hợp tác và chính thức ký kết hợp đồng.'
  },
  {
    id: 'cloze-6',
    level: 'HSK 6',
    title: 'Triết lý học vấn (HSK 6)',
    textParts: [
      '治学之道，贵在',
      '与持之以恒。对待任何细节都必须',
      '，切忌',
      '，方能真正',
      '学术的真谛。'
    ],
    blankCount: 4,
    wordBank: [
      { key: 'A', hanzi: '循序渐进', pinyin: 'xún xù jiàn jìn', meaning: 'tuần tự từng bước' },
      { key: 'B', hanzi: '一丝不苟', pinyin: 'yì sī bù gǒu', meaning: 'tỉ mỉ không cẩu thả' },
      { key: 'C', hanzi: '急功近利', pinyin: 'jí gōng jìn lì', meaning: 'hám lợi trước mắt' },
      { key: 'D', hanzi: '领悟', pinyin: 'lǐngwù', meaning: 'lĩnh hội' }
    ],
    correctAnswers: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
    fullText: '治学之道，贵在循序渐进 (A) 与持之以恒。对待任何细节都必须一丝不苟 (B)，切忌急功近利 (C)，方能真正领悟 (D) 学术的真谛。',
    translation: 'Đạo học thuật quý ở chỗ tuần tự từng bước và kiên trì. Với mọi chi tiết đều phải tỉ mỉ, tránh hám lợi trước mắt, mới thực sự lĩnh hội được chân lý.'
  }
];

// 5. EXERCISE TYPE: NHÌN PHIÊN ÂM VIẾT HÁN TỰ (With Level Tags)
const PINYIN_TO_HANZI_EXERCISES = [
  {
    id: 'pth-1',
    level: 'HSK 1',
    pinyin: 'lǎoshī',
    meaning: 'Thầy / cô giáo',
    hanzi: '老师',
    hint: 'Lǎoshī (người dạy học)',
    tiles: ['老', '师', '学', '生', '大', '家']
  },
  {
    id: 'pth-2',
    level: 'HSK 1',
    pinyin: 'píngguǒ',
    meaning: 'Quả táo',
    hanzi: '苹果',
    hint: 'Píngguǒ (hoa quả ngọt giòn)',
    tiles: ['苹', '果', '西', '瓜', '茶', '水']
  },
  {
    id: 'pth-3',
    level: 'HSK 2',
    pinyin: 'bāngzhù',
    meaning: 'Giúp đỡ',
    hanzi: '帮助',
    hint: 'Bāngzhù (hỗ trợ)',
    tiles: ['帮', '助', '请', '问', '工', '作']
  },
  {
    id: 'pth-4',
    level: 'HSK 2',
    pinyin: 'fēijī',
    meaning: 'Máy bay',
    hanzi: '飞机',
    hint: 'Fēijī (phương tiện bay)',
    tiles: ['飞', '机', '车', '场', '开', '天']
  },
  {
    id: 'pth-5',
    level: 'HSK 3',
    pinyin: 'jīnglǐ',
    meaning: 'Giám đốc, quản lý',
    hanzi: '经理',
    hint: 'Jīnglǐ (người lãnh đạo bộ phận)',
    tiles: ['经', '理', '同', '事', '公', '司']
  },
  {
    id: 'pth-6',
    level: 'HSK 4',
    pinyin: 'jīngjì',
    meaning: 'Kinh tế',
    hanzi: '经济',
    hint: 'Jīngjì (nền kinh tế)',
    tiles: ['经', '济', '法', '律', '发', '展']
  },
  {
    id: 'pth-7',
    level: 'HSK 5',
    pinyin: 'tóuzī',
    meaning: 'Đầu tư',
    hanzi: '投资',
    hint: 'Tóuzī (bỏ vốn sinh lời)',
    tiles: ['投', '资', '金', '合', '同', '企']
  },
  {
    id: 'pth-8',
    level: 'HSK 6',
    pinyin: 'fánróng',
    meaning: 'Phồn vinh',
    hanzi: '繁荣',
    hint: 'Fánróng (thịnh vượng rực rỡ)',
    tiles: ['繁', '荣', '富', '强', '昌', '盛']
  }
];

// 6. EXERCISE TYPE: SẮP XẾP TỪ THÀNH CÂU (With Level Tags)
const SENTENCE_ORDERING_EXERCISES = [
  {
    id: 'so-1',
    level: 'HSK 1',
    tokens: ['我想', '去', '北京', '看', '朋友', '。'],
    scrambled: ['看', '北京', '我想', '。', '朋友', '去'],
    correctSentence: '我想去北京看朋友。',
    pinyin: 'Wǒ xiǎng qù Běijīng kàn péngyou.',
    vietnamese: 'Tôi muốn đi Bắc Kinh thăm bạn.',
    grammarPoint: 'Cấu trúc câu liên động (连动句): Chủ ngữ + Động từ 1 (nơi chốn) + Động từ 2 (mục đích).'
  },
  {
    id: 'so-2',
    level: 'HSK 2',
    tokens: ['他', '在', '医院', '工作', '。'],
    scrambled: ['工作', '在', '他', '。', '医院'],
    correctSentence: '他在医院工作。',
    pinyin: 'Tā zài yīyuàn gōngzuò.',
    vietnamese: 'Anh ấy làm việc ở bệnh viện.',
    grammarPoint: 'Cấu trúc giới từ chỉ địa điểm: Chủ ngữ + 在 + Nơi chốn + Động từ.'
  },
  {
    id: 'so-3',
    level: 'HSK 3',
    tokens: ['坐地铁', '去', '公司', '非常', '方便', '。'],
    scrambled: ['公司', '非常', '去', '方便', '坐地铁', '。'],
    correctSentence: '坐地铁去公司非常方便。',
    pinyin: 'Zuò dìtiě qù gōngsī fēicháng fāngbiàn.',
    vietnamese: 'Đi tàu điện ngầm đến công ty vô cùng thuận tiện.',
    grammarPoint: 'Cụm động từ làm chủ ngữ: [坐地铁去公司] + Phó từ chỉ mức độ + Tính từ.'
  },
  {
    id: 'so-4',
    level: 'HSK 4',
    tokens: ['只要', '坚持', '努力', '就一定能', '成功', '。'],
    scrambled: ['成功', '坚持', '只要', '就一定能', '努力', '。'],
    correctSentence: '只要坚持努力就一定能成功。',
    pinyin: 'Zhǐyào jiānchí nǔlì jiù yídìng néng chénggōng.',
    vietnamese: 'Chỉ cần kiên trì nỗ lực thì nhất định có thể thành công.',
    grammarPoint: 'Cặp liên từ điều kiện thiết yếu: 只要... 就... (Chỉ cần... thì...).'
  },
  {
    id: 'so-5',
    level: 'HSK 5',
    tokens: ['签字前', '务必', '仔细审查', '合同条款', '。'],
    scrambled: ['仔细审查', '务必', '合同条款', '签字前', '。'],
    correctSentence: '签字前务必仔细审查合同条款。',
    pinyin: 'Qiānzì qián wùbì zǐxì shěnchá hétong tiáokuǎn.',
    vietnamese: 'Trước khi ký tên nhất định phải xem xét kỹ các điều khoản hợp đồng.',
    grammarPoint: 'Trạng từ chỉ thời gian đứng trước vị ngữ: [签字前] + Phó từ mệnh lệnh [务必] + Động từ + Tân ngữ.'
  },
  {
    id: 'so-6',
    level: 'HSK 6',
    tokens: ['学习汉语', '必须', '循序渐进', '不可', '急于求成', '。'],
    scrambled: ['循序渐进', '不可', '必须', '急于求成', '学习汉语', '。'],
    correctSentence: '学习汉语必须循序渐进不可急于求成。',
    pinyin: 'Xuéxí Hànyǔ bìxū xún xù jiàn jìn bù kě jí yú qiú chéng.',
    vietnamese: 'Học tiếng Hán phải tuần tự từng bước, không được nóng vội mong thành.',
    grammarPoint: 'Cặp đối thành ngữ bốn chữ: 循序渐进 (tuần tự) đối lập với 急于求成 (nóng vội).'
  }
];

// 7. EXERCISE TYPE: DỊCH CÂU VIỆT SANG TRUNG (With Level Tags)
const TRANSLATION_EXERCISES = [
  {
    id: 'trans-1',
    level: 'HSK 1',
    vietnamese: 'Ngày mai bạn có rảnh không? Chúng ta đi uống cà phê nhé.',
    targetHanzi: '明天你有空吗？我们去喝咖啡吧。',
    pinyin: 'Míngtiān nǐ yǒu kòng ma? Wǒmen qù hē kāfēi ba.',
    options: [
      { text: '明天你有空吗？我们去喝咖啡吧。', isCorrect: true },
      { text: '你有空明天吗？我们去喝咖啡呢。', isCorrect: false },
      { text: '明天你空有吗？我们喝咖啡去吗。', isCorrect: false }
    ],
    explanation: 'Từ chỉ thời gian "明天" đứng trước chủ ngữ hoặc sau chủ ngữ. Trợ từ ngữ khí "吧" dùng cuối câu đề nghị.'
  },
  {
    id: 'trans-2',
    level: 'HSK 2',
    vietnamese: 'Hôm qua anh ấy không đến trường vì bị ốm.',
    targetHanzi: '昨天他没来学校，因为他生病了。',
    pinyin: 'Zuótiān tā méi lái xuéxiào, yīnwèi tā shēngbìng le.',
    options: [
      { text: '昨天他不来学校，因为他生病了。', isCorrect: false },
      { text: '昨天他没来学校，因为他生病了。', isCorrect: true },
      { text: '昨天他没去学校，虽然他生病了。', isCorrect: false }
    ],
    explanation: 'Hành động không xảy ra trong quá khứ dùng "没 (méi)", không dùng "不 (bù)".'
  },
  {
    id: 'trans-3',
    level: 'HSK 3',
    vietnamese: 'Nhà của tôi cách công ty rất gần, đi bộ mười phút là tới.',
    targetHanzi: '我家离公司很近，走路十分钟就到了。',
    pinyin: 'Wǒ jiā lí gōngsī hěn jìn, zǒulù shí fēnzhōng jiù dào le.',
    options: [
      { text: '我家在公司很近，走路十分钟就到了。', isCorrect: false },
      { text: '我家离公司很近，走路十分钟就到了。', isCorrect: true },
      { text: '我家从公司很近，走路十分钟就到了。', isCorrect: false }
    ],
    explanation: 'Cấu trúc chỉ khoảng cách: "A 离 B + tính từ (远 / 近)". Không dùng "在" hay "从".'
  },
  {
    id: 'trans-4',
    level: 'HSK 4',
    vietnamese: 'Mặc dù trời mưa to, nhưng anh ấy vẫn đến đúng giờ.',
    targetHanzi: '尽管外边下着大雨，但他依然准时到了。',
    pinyin: 'Jǐnguǎn wàibiān xià zhe dàyǔ, dàn tā yīrán zhǔnshí dào le.',
    options: [
      { text: '尽管外边下着大雨，但他依然准时到了。', isCorrect: true },
      { text: '因为外边下着大雨，所以他依然准时到了。', isCorrect: false },
      { text: '虽然外边下大雨，或者他依然准时到了。', isCorrect: false }
    ],
    explanation: 'Cặp liên từ nhượng bộ: 尽管... 但/依然... (Mặc dù... nhưng vẫn...).'
  },
  {
    id: 'trans-5',
    level: 'HSK 5',
    vietnamese: 'Doanh nghiệp cần phải chú trọng nâng cao sức cạnh tranh cốt lõi.',
    targetHanzi: '企业必须注重提升自身的核心竞争力。',
    pinyin: 'Qǐyè bìxū zhùzhòng tíshēng zìshēn de héxīn jìngzhēnglì.',
    options: [
      { text: '企业必须注重提升自身的核心竞争力。', isCorrect: true },
      { text: '企业需要看重高大自己的竞争力。', isCorrect: false },
      { text: '企业一定喜欢提高自己的核心争论。', isCorrect: false }
    ],
    explanation: 'Cụm chuẩn HSK 5: 提升...核心竞争力 (Nâng cao năng lực cạnh tranh cốt lõi).'
  },
  {
    id: 'trans-6',
    level: 'HSK 6',
    vietnamese: 'Chúng ta phải phòng ngừa chu đáo trước khi rủi ro xảy ra.',
    targetHanzi: '我们必须在风险发生前做到未雨绸缪。',
    pinyin: 'Wǒmen bìxū zài fēngxiǎn fāshēng qián zuò dào wèi yǔ chóu móu.',
    options: [
      { text: '我们必须在风险发生前做到未雨绸缪。', isCorrect: true },
      { text: '我们应该在风险后来急功近利。', isCorrect: false },
      { text: '我们要在没有下雨的时候一丝不苟。', isCorrect: false }
    ],
    explanation: 'Thành ngữ HSK 6: 未雨绸缪 (chu bị trước, phòng ngừa trước rủi ro).'
  }
];

// 8. EXERCISE TYPE: HOÀN THÀNH HỘI THOẠI 2 LƯỢT TRẢ LỜI (With Level Tags)
const TWO_TURN_DIALOGUES = [
  {
    id: 'dial-1',
    level: 'HSK 1',
    topic: 'Hỏi đường thư viện (HSK 1-2)',
    partner: { name: 'Bạn Trương (张同学)', role: 'Người qua đường' },
    turn1: {
      prompt: '你好，请问学校图书馆怎么走？',
      pinyin: 'Nǐ hǎo, qǐngwèn xuéxiào túshūguǎn zěnme zǒu?',
      meaning: 'Xin chào, cho hỏi thư viện trường đi như thế nào ạ?',
      options: [
        { text: '一直往前走，在第二个路口向右拐就是。', pinyin: 'Yìzhí wǎng qián zǒu, zài dì-èr ge lùkǒu xiàng yòu guǎi jiù shì.', meaning: 'Cứ đi thẳng, ở ngã rẽ thứ 2 rẽ phải là tới.', isCorrect: true },
        { text: '我不喜欢喝绿茶。', pinyin: 'Wǒ bù xǐhuan hē lǜchá.', meaning: 'Tôi không thích uống trà xanh.', isCorrect: false },
        { text: '今天星期天。', pinyin: 'Jīntiān xīngqītiān.', meaning: 'Hôm nay chủ nhật.', isCorrect: false }
      ]
    },
    turn2: {
      prompt: '好的，太感谢你了！那里离这里远吗？',
      pinyin: 'Hǎo de, tài gǎnxiè nǐ le! Nàlǐ lí zhèlǐ yuǎn ma?',
      meaning: 'Vâng, cảm ơn bạn nhiều! Chỗ đó cách đây có xa không?',
      options: [
        { text: '很近，走五分钟就到了。祝你顺利！', pinyin: 'Hěn jìn, zǒu wǔ fēnzhōng jiù dào le. Zhù nǐ shùnlì!', meaning: 'Rất gần, đi 5 phút là tới. Chúc bạn thuận lợi!', isCorrect: true },
        { text: '这个手机两千块钱。', pinyin: 'Zhè ge shǒujī liǎng qiān kuài qián.', meaning: 'Chiếc điện thoại này 2000 tệ.', isCorrect: false },
        { text: '我是医生。', pinyin: 'Wǒ shì yīshēng.', meaning: 'Tôi là bác sĩ.', isCorrect: false }
      ]
    }
  },
  {
    id: 'dial-2',
    level: 'HSK 3',
    topic: 'Gọi món ở nhà hàng (HSK 2-3)',
    partner: { name: 'Phục vụ bàn (服务员)', role: 'Nhân viên nhà hàng' },
    turn1: {
      prompt: '您好，欢迎光临！请问您想吃点儿什么？',
      pinyin: 'Nín hǎo, huānyíng guānglín! Qǐngwèn nín xiǎng chī diǎnr shénme?',
      meaning: 'Kính chào quý khách! Xin hỏi quý khách muốn dùng món gì ạ?',
      options: [
        { text: '服务员，请给我一份宫保鸡丁和一碗米饭。', pinyin: 'Fúwùyuán, qǐng gěi wǒ yí fèn gōngbǎojīdīng hé yì wǎn mǐfàn.', meaning: 'Cho tôi một phần gà Kung Pao và bát cơm trắng.', isCorrect: true },
        { text: '我要去机场接朋友。', pinyin: 'Wǒ yào qù jīchǎng jiē péngyou.', meaning: 'Tôi phải đi sân bay đón bạn.', isCorrect: false },
        { text: '今天天气很冷。', pinyin: 'Jīntiān tiānqì hěn lěng.', meaning: 'Hôm nay thời tiết rất lạnh.', isCorrect: false }
      ]
    },
    turn2: {
      prompt: '好的，已经记下了。请问您需要喝点儿什么饮料吗？',
      pinyin: 'Hǎo de, yǐjīng jì xià le. Qǐngwèn nín xūyào hē diǎnr shénme yǐnliào ma?',
      meaning: 'Dạ vâng đã ghi lại rồi ạ. Quý khách có cần dùng đồ uống gì không ạ?',
      options: [
        { text: '请给我一杯热绿茶，谢谢。', pinyin: 'Qǐng gěi wǒ yì bēi rè lǜchá, xièxie.', meaning: 'Cho tôi một tách trà xanh nóng nhé, cảm ơn.', isCorrect: true },
        { text: '我不会写汉字。', pinyin: 'Wǒ bú huì xiě hànzì.', meaning: 'Tôi không biết viết chữ Hán.', isCorrect: false },
        { text: '明天见，再见！', pinyin: 'Míngtiān jiàn, zàijiàn!', meaning: 'Ngày mai gặp, tạm biệt!', isCorrect: false }
      ]
    }
  },
  {
    id: 'dial-3',
    level: 'HSK 4',
    topic: 'Thảo luận công việc văn phòng (HSK 4-5)',
    partner: { name: 'Trần Tổng (陈总)', role: 'Trưởng phòng kinh doanh' },
    turn1: {
      prompt: '小李，下周新产品的市场推广方案准备得怎么样了？',
      pinyin: 'Xiǎo Lǐ, xià zhōu xīn chǎnpǐn de shìchǎng tuīguǎng fāng\'àn zhǔnbèi de zěnmeyàng le?',
      meaning: 'Tiểu Lý, phương án quảng bá sản phẩm mới tuần tới đã chuẩn bị thế nào rồi?',
      options: [
        { text: '陈总，方案已经初稿完成，我正和团队核对预算细节，明天上午向您汇报。', pinyin: 'Chén zǒng, fāng\'àn yǐjīng chūgǎo wánchéng, wǒ zhèng hé tuánduì héduì yùsuàn xìjié, míngtiān shàngwǔ xiàng nín huìbào.', meaning: 'Thưa Trần Tổng, dự thảo đã xong, tôi đang rà soát ngân sách và sẽ báo cáo sáng mai.', isCorrect: true },
        { text: '我不喜欢吃辣的菜。', pinyin: 'Wǒ bù xǐhuan chī là de cài.', meaning: 'Tôi không thích ăn đồ cay.', isCorrect: false },
        { text: '昨天我买了新裤子。', pinyin: 'Zuótiān wǒ mǎi le xīn kùzi.', meaning: 'Hôm qua tôi mua quần mới.', isCorrect: false }
      ]
    },
    turn2: {
      prompt: '很好，这次推广非常关键，一定要注重线上与线下的协同配合。',
      pinyin: 'Hěn hǎo, zhè cì tuīguǎng fēicháng guānjiàn, yídìng yào zhùzhòng xiànshàng yǔ xiànxià de xiétóng pèihé.',
      meaning: 'Rất tốt, đợt quảng bá này rất then chốt, nhất định phải chú trọng phối hợp giữa online và offline.',
      options: [
        { text: '明白！我们已经制定了双线联动的策略，确保实现预期效益。', pinyin: 'Míngbai! Wǒmen yǐjīng zhìdìng le shuāngxiàn liándòng de cèlüè, quèbǎo shíxiàn yùqī xiàoyì.', meaning: 'Rõ rồi ạ! Chúng tôi đã lên chiến lược kép để đảm bảo hiệu quả kỳ vọng.', isCorrect: true },
        { text: '现在是下午三点整。', pinyin: 'Xiànzài shì xiàwǔ sān diǎn zhěng.', meaning: 'Bây giờ là 3 giờ đúng.', isCorrect: false },
        { text: '感冒了要多喝开水。', pinyin: 'Gǎnmào le yào duō hē kāishuǐ.', meaning: 'Bị cảm thì nên uống nước sôi.', isCorrect: false }
      ]
    }
  }
];
