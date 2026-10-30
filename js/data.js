/**
 * Chinese Learning App - Comprehensive Dataset
 * Contains HSK 1 & HSK 2 Vocabulary and all 7+ Exercise Module datasets.
 */

// 1. DEFAULT HSK 1 & HSK 2 VOCABULARY LIST (120+ High Quality Words)
const DEFAULT_HSK_WORDS = [
  // --- HSK 1 ---
  {
    id: 'hsk1-01',
    hanzi: '你',
    pinyin: 'nǐ',
    meaning: 'Bạn, anh, chị (ngôi thứ 2 số ít)',
    level: 'HSK 1',
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
    meaning: 'Tôi, ta, mình (ngôi thứ 1 số ít)',
    level: 'HSK 1',
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
    type: 'Đại từ',
    example: {
      hanzi: '我们一起去吃饭吧。',
      pinyin: 'Wǒmen yìqǐ qù chī fàn ba.',
      meaning: 'Chúng mình cùng nhau đi ăn cơm nhé.'
    }
  },
  {
    id: 'hsk1-06',
    hanzi: '好',
    pinyin: 'hǎo',
    meaning: 'Tốt, khỏe, ngon, đẹp',
    level: 'HSK 1',
    type: 'Tính từ',
    example: {
      hanzi: '今天天气很好。',
      pinyin: 'Jīntiān tiānqì hěn hǎo.',
      meaning: 'Hôm nay thời tiết rất đẹp.'
    }
  },
  {
    id: 'hsk1-07',
    hanzi: '是',
    pinyin: 'shì',
    meaning: 'Là, phải, đúng',
    level: 'HSK 1',
    type: 'Động từ',
    example: {
      hanzi: '他是中国医生。',
      pinyin: 'Tā shì Zhōngguó yīshēng.',
      meaning: 'Anh ấy là bác sĩ người Trung Quốc.'
    }
  },
  {
    id: 'hsk1-08',
    hanzi: '不',
    pinyin: 'bù',
    meaning: 'Không, chẳng (phủ định)',
    level: 'HSK 1',
    type: 'Phó từ',
    example: {
      hanzi: '我不是老师，我是学生。',
      pinyin: 'Wǒ bú shì lǎoshī, wǒ shì xuésheng.',
      meaning: 'Tôi không phải giáo viên, tôi là học sinh.'
    }
  },
  {
    id: 'hsk1-09',
    hanzi: '谢谢',
    pinyin: 'xièxie',
    meaning: 'Cảm ơn',
    level: 'HSK 1',
    type: 'Động từ',
    example: {
      hanzi: '谢谢你的帮助！',
      pinyin: 'Xièxie nǐ de bāngzhù!',
      meaning: 'Cảm ơn sự giúp đỡ của bạn!'
    }
  },
  {
    id: 'hsk1-10',
    hanzi: '不客气',
    pinyin: 'bú kèqi',
    meaning: 'Đừng khách sáo, không có gì',
    level: 'HSK 1',
    type: 'Cụm từ',
    example: {
      hanzi: '不客气，请坐。',
      pinyin: 'Bú kèqi, qǐng zuò.',
      meaning: 'Không có gì, mời ngồi.'
    }
  },
  {
    id: 'hsk1-11',
    hanzi: '再见',
    pinyin: 'zàijiàn',
    meaning: 'Tạm biệt, hẹn gặp lại',
    level: 'HSK 1',
    type: 'Động từ',
    example: {
      hanzi: '明天见，再见！',
      pinyin: 'Míngtiān jiàn, zàijiàn!',
      meaning: 'Ngày mai gặp, tạm biệt!'
    }
  },
  {
    id: 'hsk1-12',
    hanzi: '吃',
    pinyin: 'chī',
    meaning: 'Ăn',
    level: 'HSK 1',
    type: 'Động từ',
    example: {
      hanzi: '你想吃什么？',
      pinyin: 'Nǐ xiǎng chī shénme?',
      meaning: 'Bạn muốn ăn gì?'
    }
  },
  {
    id: 'hsk1-13',
    hanzi: '喝',
    pinyin: 'hē',
    meaning: 'Uống',
    level: 'HSK 1',
    type: 'Động từ',
    example: {
      hanzi: '我想喝一杯中国茶。',
      pinyin: 'Wǒ xiǎng hē yì bēi Zhōngguó chá.',
      meaning: 'Tôi muốn uống một tách trà Trung Quốc.'
    }
  },
  {
    id: 'hsk1-14',
    hanzi: '水',
    pinyin: 'shuǐ',
    meaning: 'Nước',
    level: 'HSK 1',
    type: 'Danh từ',
    example: {
      hanzi: '多喝水对身体好。',
      pinyin: 'Duō hē shuǐ duì shēntǐ hǎo.',
      meaning: 'Uống nhiều nước rất tốt cho cơ thể.'
    }
  },
  {
    id: 'hsk1-15',
    hanzi: '茶',
    pinyin: 'chá',
    meaning: 'Trà, chè',
    level: 'HSK 1',
    type: 'Danh từ',
    example: {
      hanzi: '爸爸每天早上喝茶。',
      pinyin: 'Bàba měitiān zǎoshang hē chá.',
      meaning: 'Bố mỗi sáng đều uống trà.'
    }
  },
  {
    id: 'hsk1-16',
    hanzi: '米饭',
    pinyin: 'mǐfàn',
    meaning: 'Cơm',
    level: 'HSK 1',
    type: 'Danh từ',
    example: {
      hanzi: '中午我们吃米饭。',
      pinyin: 'Zhōngwǔ wǒmen chī mǐfàn.',
      meaning: 'Buổi trưa chúng mình ăn cơm.'
    }
  },
  {
    id: 'hsk1-17',
    hanzi: '苹果',
    pinyin: 'píngguǒ',
    meaning: 'Quả táo',
    level: 'HSK 1',
    type: 'Danh từ',
    example: {
      hanzi: '这个红苹果很甜。',
      pinyin: 'Zhè ge hóng píngguǒ hěn tián.',
      meaning: 'Quả táo đỏ này rất ngọt.'
    }
  },
  {
    id: 'hsk1-18',
    hanzi: '看',
    pinyin: 'kàn',
    meaning: 'Nhìn, xem, đọc',
    level: 'HSK 1',
    type: 'Động từ',
    example: {
      hanzi: '你看，那个人是谁？',
      pinyin: 'Nǐ kàn, nà ge rén shì shéi?',
      meaning: 'Bạn nhìn xem, người kia là ai?'
    }
  },
  {
    id: 'hsk1-19',
    hanzi: '听',
    pinyin: 'tīng',
    meaning: 'Nghe',
    level: 'HSK 1',
    type: 'Động từ',
    example: {
      hanzi: '我喜欢听中文歌。',
      pinyin: 'Wǒ xǐhuan tīng Zhōngwén gē.',
      meaning: 'Tôi thích nghe bài hát tiếng Trung.'
    }
  },
  {
    id: 'hsk1-20',
    hanzi: '说',
    pinyin: 'shuō',
    meaning: 'Nói',
    level: 'HSK 1',
    type: 'Động từ',
    example: {
      hanzi: '你会说汉语吗？',
      pinyin: 'Nǐ huì shuō Hànyǔ ma?',
      meaning: 'Bạn biết nói tiếng Trung không?'
    }
  },
  {
    id: 'hsk1-21',
    hanzi: '读',
    pinyin: 'dú',
    meaning: 'Đọc (to), học',
    level: 'HSK 1',
    type: 'Động từ',
    example: {
      hanzi: '请跟我读这个生词。',
      pinyin: 'Qǐng gēn wǒ dú zhè ge shēngcí.',
      meaning: 'Mời các bạn đọc từ mới này theo tôi.'
    }
  },
  {
    id: 'hsk1-22',
    hanzi: '写',
    pinyin: 'xiě',
    meaning: 'Viết',
    level: 'HSK 1',
    type: 'Động từ',
    example: {
      hanzi: '这个汉字怎么写？',
      pinyin: 'Zhè ge hànzì zěnme xiě?',
      meaning: 'Chữ Hán này viết như thế nào?'
    }
  },
  {
    id: 'hsk1-23',
    hanzi: '汉语',
    pinyin: 'Hànyǔ',
    meaning: 'Tiếng Hán, tiếng Trung',
    level: 'HSK 1',
    type: 'Danh từ',
    example: {
      hanzi: '汉语不太难。',
      pinyin: 'Hànyǔ bú tài nán.',
      meaning: 'Tiếng Hán không khó lắm.'
    }
  },
  {
    id: 'hsk1-24',
    hanzi: '字',
    pinyin: 'zì',
    meaning: 'Chữ, chữ viết',
    level: 'HSK 1',
    type: 'Danh từ',
    example: {
      hanzi: '中国字很漂亮。',
      pinyin: 'Zhōngguó zì hěn piàoliang.',
      meaning: 'Chữ Trung Quốc rất đẹp.'
    }
  },
  {
    id: 'hsk1-25',
    hanzi: '家',
    pinyin: 'jiā',
    meaning: 'Nhà, gia đình',
    level: 'HSK 1',
    type: 'Danh từ',
    example: {
      hanzi: '我家有四口人。',
      pinyin: 'Wǒ jiā yǒu sì kǒu rén.',
      meaning: 'Nhà tôi có 4 người.'
    }
  },
  {
    id: 'hsk1-26',
    hanzi: '学校',
    pinyin: 'xuéxiào',
    meaning: 'Trường học',
    level: 'HSK 1',
    type: 'Danh từ',
    example: {
      hanzi: '我们的学校很大。',
      pinyin: 'Wǒmen de xuéxiào hěn dà.',
      meaning: 'Trường học của chúng tôi rất to lớn.'
    }
  },
  {
    id: 'hsk1-27',
    hanzi: '商店',
    pinyin: 'shāngdiàn',
    meaning: 'Cửa hàng',
    level: 'HSK 1',
    type: 'Danh từ',
    example: {
      hanzi: '我去商店买笔。',
      pinyin: 'Wǒ qù shāngdiàn mǎi bǐ.',
      meaning: 'Tôi đi cửa hàng mua bút.'
    }
  },
  {
    id: 'hsk1-28',
    hanzi: '医院',
    pinyin: 'yīyuàn',
    meaning: 'Bệnh viện',
    level: 'HSK 1',
    type: 'Danh từ',
    example: {
      hanzi: '他在医院工作。',
      pinyin: 'Tā zài yīyuàn gōngzuò.',
      meaning: 'Anh ấy làm việc ở bệnh viện.'
    }
  },
  {
    id: 'hsk1-29',
    hanzi: '中国',
    pinyin: 'Zhōngguó',
    meaning: 'Trung Quốc',
    level: 'HSK 1',
    type: 'Danh từ riêng',
    example: {
      hanzi: '我想去中国旅游。',
      pinyin: 'Wǒ xiǎng qù Zhōngguó lǚyóu.',
      meaning: 'Tôi muốn đi du lịch Trung Quốc.'
    }
  },
  {
    id: 'hsk1-30',
    hanzi: '北京',
    pinyin: 'Běijīng',
    meaning: 'Bắc Kinh',
    level: 'HSK 1',
    type: 'Danh từ riêng',
    example: {
      hanzi: '北京是中国的首都。',
      pinyin: 'Běijīng shì Zhōngguó de shǒudū.',
      meaning: 'Bắc Kinh là thủ đô của Trung Quốc.'
    }
  },
  {
    id: 'hsk1-31',
    hanzi: '今天',
    pinyin: 'jīntiān',
    meaning: 'Hôm nay',
    level: 'HSK 1',
    type: 'Danh từ chỉ thời gian',
    example: {
      hanzi: '今天星期五。',
      pinyin: 'Jīntiān xīngqīwǔ.',
      meaning: 'Hôm nay là thứ Sáu.'
    }
  },
  {
    id: 'hsk1-32',
    hanzi: '明天',
    pinyin: 'míngtiān',
    meaning: 'Ngày mai',
    level: 'HSK 1',
    type: 'Danh từ chỉ thời gian',
    example: {
      hanzi: '明天你有空吗？',
      pinyin: 'Míngtiān nǐ yǒu kòng ma?',
      meaning: 'Ngày mai bạn có rảnh không?'
    }
  },
  {
    id: 'hsk1-33',
    hanzi: '昨天',
    pinyin: 'zuótiān',
    meaning: 'Hôm qua',
    level: 'HSK 1',
    type: 'Danh từ chỉ thời gian',
    example: {
      hanzi: '昨天我去图书馆了。',
      pinyin: 'Zuótiān wǒ qù túshūguǎn le.',
      meaning: 'Hôm qua tôi đã đi thư viện.'
    }
  },
  {
    id: 'hsk1-34',
    hanzi: '现在',
    pinyin: 'xiànzài',
    meaning: 'Bây giờ, hiện tại',
    level: 'HSK 1',
    type: 'Danh từ chỉ thời gian',
    example: {
      hanzi: '现在几点了？',
      pinyin: 'Xiànzài jǐ diǎn le?',
      meaning: 'Bây giờ mấy giờ rồi?'
    }
  },
  {
    id: 'hsk1-35',
    hanzi: '年',
    pinyin: 'nián',
    meaning: 'Năm',
    level: 'HSK 1',
    type: 'Danh từ',
    example: {
      hanzi: '我学汉语一年了。',
      pinyin: 'Wǒ xué Hànyǔ yì nián le.',
      meaning: 'Tôi học tiếng Trung được một năm rồi.'
    }
  },
  {
    id: 'hsk1-36',
    hanzi: '月',
    pinyin: 'yuè',
    meaning: 'Tháng, mặt trăng',
    level: 'HSK 1',
    type: 'Danh từ',
    example: {
      hanzi: '八月很热。',
      pinyin: 'Bā yuè hěn rè.',
      meaning: 'Tháng 8 rất nóng.'
    }
  },
  {
    id: 'hsk1-37',
    hanzi: '号',
    pinyin: 'hào',
    meaning: 'Ngày (trong tháng), số',
    level: 'HSK 1',
    type: 'Danh từ',
    example: {
      hanzi: '今天是十月十五号。',
      pinyin: 'Jīntiān shì shí yuè shíwǔ hào.',
      meaning: 'Hôm nay là ngày 15 tháng 10.'
    }
  },
  {
    id: 'hsk1-38',
    hanzi: '星期',
    pinyin: 'xīngqī',
    meaning: 'Tuần, thứ',
    level: 'HSK 1',
    type: 'Danh từ',
    example: {
      hanzi: '这个星期我很忙。',
      pinyin: 'Zhè ge xīngqī wǒ hěn máng.',
      meaning: 'Tuần này tôi rất bận.'
    }
  },
  {
    id: 'hsk1-39',
    hanzi: '点',
    pinyin: 'diǎn',
    meaning: 'Giờ, điểm, giọt',
    level: 'HSK 1',
    type: 'Lượng từ',
    example: {
      hanzi: '现在是早上八点。',
      pinyin: 'Xiànzài shì zǎoshang bā diǎn.',
      meaning: 'Bây giờ là 8 giờ sáng.'
    }
  },
  {
    id: 'hsk1-40',
    hanzi: '喜欢',
    pinyin: 'xǐhuan',
    meaning: 'Thích, yêu thích',
    level: 'HSK 1',
    type: 'Động từ',
    example: {
      hanzi: '我喜欢学中文。',
      pinyin: 'Wǒ xǐhuan xué Zhōngwén.',
      meaning: 'Tôi thích học tiếng Trung.'
    }
  },
  {
    id: 'hsk1-41',
    hanzi: '想',
    pinyin: 'xiǎng',
    meaning: 'Muốn, nghĩ, nhớ',
    level: 'HSK 1',
    type: 'Động từ',
    example: {
      hanzi: '我想买新手机。',
      pinyin: 'Wǒ xiǎng mǎi xīn shǒujī.',
      meaning: 'Tôi muốn mua điện thoại mới.'
    }
  },
  {
    id: 'hsk1-42',
    hanzi: '爱',
    pinyin: 'ài',
    meaning: 'Yêu, mến',
    level: 'HSK 1',
    type: 'Động từ',
    example: {
      hanzi: '我爱我的爸爸妈妈。',
      pinyin: 'Wǒ ài wǒ de bàba māma.',
      meaning: 'Tôi yêu bố mẹ của tôi.'
    }
  },
  {
    id: 'hsk1-43',
    hanzi: '会',
    pinyin: 'huì',
    meaning: 'Biết (qua học tập), sẽ',
    level: 'HSK 1',
    type: 'Trợ động từ',
    example: {
      hanzi: '你会做中国菜吗？',
      pinyin: 'Nǐ huì zuò Zhōngguó cài ma?',
      meaning: 'Bạn biết nấu món ăn Trung Quốc không?'
    }
  },
  {
    id: 'hsk1-44',
    hanzi: '买',
    pinyin: 'mǎi',
    meaning: 'Mua',
    level: 'HSK 1',
    type: 'Động từ',
    example: {
      hanzi: '你买苹果了吗？',
      pinyin: 'Nǐ mǎi píngguǒ le ma?',
      meaning: 'Bạn mua táo chưa?'
    }
  },
  {
    id: 'hsk1-45',
    hanzi: '钱',
    pinyin: 'qián',
    meaning: 'Tiền',
    level: 'HSK 1',
    type: 'Danh từ',
    example: {
      hanzi: '这个多少钱？',
      pinyin: 'Zhè ge duōshao qián?',
      meaning: 'Cái này bao nhiêu tiền?'
    }
  },
  {
    id: 'hsk1-46',
    hanzi: '块',
    pinyin: 'kuài',
    meaning: 'Đồng, tệ (đơn vị tiền tệ)',
    level: 'HSK 1',
    type: 'Lượng từ',
    example: {
      hanzi: '一本书二十块钱。',
      pinyin: 'Yì běn shū èrshí kuài qián.',
      meaning: 'Một quyển sách hai mươi tệ.'
    }
  },
  {
    id: 'hsk1-47',
    hanzi: '大',
    pinyin: 'dà',
    meaning: 'To, lớn',
    level: 'HSK 1',
    type: 'Tính từ',
    example: {
      hanzi: '这个西瓜很大。',
      pinyin: 'Zhè ge xīguā hěn dà.',
      meaning: 'Quả dưa hấu này rất to.'
    }
  },
  {
    id: 'hsk1-48',
    hanzi: '小',
    pinyin: 'xiǎo',
    meaning: 'Nhỏ, bé',
    level: 'HSK 1',
    type: 'Tính từ',
    example: {
      hanzi: '那只小猫很可爱。',
      pinyin: 'Nà zhī xiǎomāo hěn kě\'ài.',
      meaning: 'Chú mèo con kia rất đáng yêu.'
    }
  },
  {
    id: 'hsk1-49',
    hanzi: '多',
    pinyin: 'duō',
    meaning: 'Nhiều',
    level: 'HSK 1',
    type: 'Tính từ',
    example: {
      hanzi: '今天学校的人很多。',
      pinyin: 'Jīntiān xuéxiào de rén hěn duō.',
      meaning: 'Hôm nay trường học có rất đông người.'
    }
  },
  {
    id: 'hsk1-50',
    hanzi: '少',
    pinyin: 'shǎo',
    meaning: 'Ít',
    level: 'HSK 1',
    type: 'Tính từ',
    example: {
      hanzi: '杯子里的水很少。',
      pinyin: 'Bēizi lǐ de shuǐ hěn shǎo.',
      meaning: 'Nước trong cốc rất ít.'
    }
  },
  {
    id: 'hsk1-51',
    hanzi: '冷',
    pinyin: 'lěng',
    meaning: 'Lạnh',
    level: 'HSK 1',
    type: 'Tính từ',
    example: {
      hanzi: '今天太冷了，穿大衣吧。',
      pinyin: 'Jīntiān tài lěng le, chuān dàyī ba.',
      meaning: 'Hôm nay lạnh quá, mặc áo khoác vào đi.'
    }
  },
  {
    id: 'hsk1-52',
    hanzi: '热',
    pinyin: 'rè',
    meaning: 'Nóng',
    level: 'HSK 1',
    type: 'Tính từ',
    example: {
      hanzi: '北京的夏天很热。',
      pinyin: 'Běijīng de xiàtiān hěn rè.',
      meaning: 'Mùa hè ở Bắc Kinh rất nóng.'
    }
  },
  {
    id: 'hsk1-53',
    hanzi: '高兴',
    pinyin: 'gāoxìng',
    meaning: 'Vui vẻ, phấn khởi',
    level: 'HSK 1',
    type: 'Tính từ',
    example: {
      hanzi: '今天我非常高兴。',
      pinyin: 'Jīntiān wǒ fēicháng gāoxìng.',
      meaning: 'Hôm nay tôi vô cùng vui mừng.'
    }
  },
  {
    id: 'hsk1-54',
    hanzi: '漂亮',
    pinyin: 'piàoliang',
    meaning: 'Xinh đẹp, đẹp đẽ',
    level: 'HSK 1',
    type: 'Tính từ',
    example: {
      hanzi: '这件衣服真漂亮！',
      pinyin: 'Zhè jiàn yīfu zhēn piàoliang!',
      meaning: 'Chiếc áo này thật là đẹp!'
    }
  },
  {
    id: 'hsk1-55',
    hanzi: '怎么',
    pinyin: 'zěnme',
    meaning: 'Như thế nào, sao, làm sao',
    level: 'HSK 1',
    type: 'Đại từ',
    example: {
      hanzi: '去车站怎么走？',
      pinyin: 'Qù chēzhàn zěnme zǒu?',
      meaning: 'Đi đến bến xe đi như thế nào?'
    }
  },
  {
    id: 'hsk1-56',
    hanzi: '怎么样',
    pinyin: 'zěnmeyàng',
    meaning: 'Thế nào, ra sao',
    level: 'HSK 1',
    type: 'Đại từ',
    example: {
      hanzi: '这本书怎么样？',
      pinyin: 'Zhè běn shū zěnmeyàng?',
      meaning: 'Quyển sách này thế nào?'
    }
  },
  {
    id: 'hsk1-57',
    hanzi: '什么',
    pinyin: 'shénme',
    meaning: 'Cái gì, gì',
    level: 'HSK 1',
    type: 'Đại từ',
    example: {
      hanzi: '你叫什么名字？',
      pinyin: 'Nǐ jiào shénme míngzi?',
      meaning: 'Bạn tên là gì?'
    }
  },
  {
    id: 'hsk1-58',
    hanzi: '谁',
    pinyin: 'shéi',
    meaning: 'Ai',
    level: 'HSK 1',
    type: 'Đại từ',
    example: {
      hanzi: '谁是你的同屋？',
      pinyin: 'Shéi shì nǐ de tóngwū?',
      meaning: 'Ai là bạn cùng phòng của bạn?'
    }
  },
  {
    id: 'hsk1-59',
    hanzi: '哪儿',
    pinyin: 'nǎr',
    meaning: 'Ở đâu, chỗ nào',
    level: 'HSK 1',
    type: 'Đại từ',
    example: {
      hanzi: '洗手间在哪儿？',
      pinyin: 'Xǐshǒujiān zài nǎr?',
      meaning: 'Nhà vệ sinh ở đâu?'
    }
  },
  {
    id: 'hsk1-60',
    hanzi: '多少',
    pinyin: 'duōshao',
    meaning: 'Bao nhiêu',
    level: 'HSK 1',
    type: 'Đại từ',
    example: {
      hanzi: '你们学校有多少学生？',
      pinyin: 'Nǐmen xuéxiào yǒu duōshao xuésheng?',
      meaning: 'Trường bạn có bao nhiêu học sinh?'
    }
  },

  // --- HSK 2 ---
  {
    id: 'hsk2-01',
    hanzi: '帮助',
    pinyin: 'bāngzhù',
    meaning: 'Giúp đỡ, sự hỗ trợ',
    level: 'HSK 2',
    type: 'Động từ',
    example: {
      hanzi: '谢谢大家的帮助。',
      pinyin: 'Xièxie dàjiā de bāngzhù.',
      meaning: 'Cảm ơn sự giúp đỡ của mọi người.'
    }
  },
  {
    id: 'hsk2-02',
    hanzi: '准备',
    pinyin: 'zhǔnbèi',
    meaning: 'Chuẩn bị, dự định',
    level: 'HSK 2',
    type: 'Động từ',
    example: {
      hanzi: '我正在准备考试。',
      pinyin: 'Wǒ zhèngzài zhǔnbèi kǎoshì.',
      meaning: 'Tôi đang chuẩn bị cho kỳ thi.'
    }
  },
  {
    id: 'hsk2-03',
    hanzi: '开始',
    pinyin: 'kāishǐ',
    meaning: 'Bắt đầu',
    level: 'HSK 2',
    type: 'Động từ',
    example: {
      hanzi: '会议八点开始。',
      pinyin: 'Huìyì bā diǎn kāishǐ.',
      meaning: 'Cuộc họp bắt đầu lúc 8 giờ.'
    }
  },
  {
    id: 'hsk2-04',
    hanzi: '介绍',
    pinyin: 'jièshào',
    meaning: 'Giới thiệu',
    level: 'HSK 2',
    type: 'Động từ',
    example: {
      hanzi: '让我介绍一下我的朋友。',
      pinyin: 'Ràng wǒ jièshào yíxià wǒ de péngyou.',
      meaning: 'Để tôi giới thiệu một chút về bạn tôi.'
    }
  },
  {
    id: 'hsk2-05',
    hanzi: '觉得',
    pinyin: 'juéde',
    meaning: 'Cảm thấy, thấy rằng, nghĩ rằng',
    level: 'HSK 2',
    type: 'Động từ',
    example: {
      hanzi: '我觉得这道菜很好吃。',
      pinyin: 'Wǒ juéde zhè dào cài hěn hǎochī.',
      meaning: 'Tôi thấy món ăn này rất ngon.'
    }
  },
  {
    id: 'hsk2-06',
    hanzi: '懂',
    pinyin: 'dǒng',
    meaning: 'Hiểu, biết rõ',
    level: 'HSK 2',
    type: 'Động từ',
    example: {
      hanzi: '老师说的话我都懂了。',
      pinyin: 'Lǎoshī shuō de huà wǒ dōu dǒng le.',
      meaning: 'Lời thầy giáo nói tôi đều hiểu rồi.'
    }
  },
  {
    id: 'hsk2-07',
    hanzi: '希望',
    pinyin: 'xīwàng',
    meaning: 'Hy vọng, mong muốn',
    level: 'HSK 2',
    type: 'Động từ',
    example: {
      hanzi: '希望你天天开心！',
      pinyin: 'Xīwàng nǐ tiāntiān kāixīn!',
      meaning: 'Hy vọng bạn mỗi ngày đều vui vẻ!'
    }
  },
  {
    id: 'hsk2-08',
    hanzi: '跑步',
    pinyin: 'pǎobù',
    meaning: 'Chạy bộ',
    level: 'HSK 2',
    type: 'Động từ',
    example: {
      hanzi: '他每天早上都去跑步。',
      pinyin: 'Tā měitiān zǎoshang dōu qù pǎobù.',
      meaning: 'Anh ấy mỗi sáng đều đi chạy bộ.'
    }
  },
  {
    id: 'hsk2-09',
    hanzi: '游泳',
    pinyin: 'yóuyǒng',
    meaning: 'Bơi lội',
    level: 'HSK 2',
    type: 'Động từ',
    example: {
      hanzi: '夏天我最喜欢游泳。',
      pinyin: 'Xiàtiān wǒ zuì xǐhuan yóuyǒng.',
      meaning: 'Mùa hè tôi thích bơi lội nhất.'
    }
  },
  {
    id: 'hsk2-10',
    hanzi: '踢足球',
    pinyin: 'tī zúqiú',
    meaning: 'Đá bóng, chơi bóng đá',
    level: 'HSK 2',
    type: 'Cụm động từ',
    example: {
      hanzi: '弟弟在操场踢足球。',
      pinyin: 'Dìdi zài cāochǎng tī zúqiú.',
      meaning: 'Em trai đang đá bóng ở sân tập.'
    }
  },
  {
    id: 'hsk2-11',
    hanzi: '打篮球',
    pinyin: 'dǎ lánqiú',
    meaning: 'Chơi bóng rổ',
    level: 'HSK 2',
    type: 'Cụm động từ',
    example: {
      hanzi: '下午我们去打篮球吧。',
      pinyin: 'Xiàwǔ wǒmen qù dǎ lánqiú ba.',
      meaning: 'Chiều nay chúng mình đi chơi bóng rổ nhé.'
    }
  },
  {
    id: 'hsk2-12',
    hanzi: '唱歌',
    pinyin: 'chànggē',
    meaning: 'Hát, ca hát',
    level: 'HSK 2',
    type: 'Động từ',
    example: {
      hanzi: '她唱歌唱得非常好听。',
      pinyin: 'Tā chànggē chàng de fēicháng hǎotīng.',
      meaning: 'Cô ấy hát rất là hay.'
    }
  },
  {
    id: 'hsk2-13',
    hanzi: '跳舞',
    pinyin: 'tiàowǔ',
    meaning: 'Nhảy múa, khiêu vũ',
    level: 'HSK 2',
    type: 'Động từ',
    example: {
      hanzi: '妹妹正在学跳舞。',
      pinyin: 'Mèimei zhèngzài xué tiàowǔ.',
      meaning: 'Em gái đang học múa.'
    }
  },
  {
    id: 'hsk2-14',
    hanzi: '旅游',
    pinyin: 'lǚyóu',
    meaning: 'Du lịch',
    level: 'HSK 2',
    type: 'Động từ',
    example: {
      hanzi: '去年我们去中国旅游。',
      pinyin: 'Qùnián wǒmen qù Zhōngguó lǚyóu.',
      meaning: 'Năm ngoái chúng tôi đi du lịch Trung Quốc.'
    }
  },
  {
    id: 'hsk2-15',
    hanzi: '上班',
    pinyin: 'shàngbān',
    meaning: 'Đi làm, bắt đầu làm việc',
    level: 'HSK 2',
    type: 'Động từ',
    example: {
      hanzi: '他每天坐地铁上班。',
      pinyin: 'Tā měitiān zuò dìtiě shàngbān.',
      meaning: 'Anh ấy hàng ngày đi tàu điện ngầm đi làm.'
    }
  },
  {
    id: 'hsk2-16',
    hanzi: '生病',
    pinyin: 'shēngbìng',
    meaning: 'Bị ốm, bị bệnh',
    level: 'HSK 2',
    type: 'Động từ',
    example: {
      hanzi: '他生病了，在家里休息。',
      pinyin: 'Tā shēngbìng le, zài jiālǐ xiūxi.',
      meaning: 'Anh ấy bị ốm rồi, đang nghỉ ngơi ở nhà.'
    }
  },
  {
    id: 'hsk2-17',
    hanzi: '休息',
    pinyin: 'xiūxi',
    meaning: 'Nghỉ ngơi',
    level: 'HSK 2',
    type: 'Động từ',
    example: {
      hanzi: '累了吧？快坐下休息一下。',
      pinyin: 'Lèi le ba? Kuài zuò xià xiūxi yíxià.',
      meaning: 'Mệt rồi đúng không? Mau ngồi xuống nghỉ chút đi.'
    }
  },
  {
    id: 'hsk2-18',
    hanzi: '药',
    pinyin: 'yào',
    meaning: 'Thuốc',
    level: 'HSK 2',
    type: 'Danh từ',
    example: {
      hanzi: '医生说每天吃两次药。',
      pinyin: 'Yīshēng shuō měitiān chī liǎng cì yào.',
      meaning: 'Bác sĩ nói mỗi ngày uống thuốc 2 lần.'
    }
  },
  {
    id: 'hsk2-19',
    hanzi: '身体',
    pinyin: 'shēntǐ',
    meaning: 'Sức khỏe, cơ thể',
    level: 'HSK 2',
    type: 'Danh từ',
    example: {
      hanzi: '祝你身体健康！',
      pinyin: 'Zhù nǐ shēntǐ jiànkāng!',
      meaning: 'Chúc bạn sức khỏe dồi dào!'
    }
  },
  {
    id: 'hsk2-20',
    hanzi: '机场',
    pinyin: 'jīchǎng',
    meaning: 'Sân bay, phi trường',
    level: 'HSK 2',
    type: 'Danh từ',
    example: {
      hanzi: '我现在要去机场接朋友。',
      pinyin: 'Wǒ xiànzài yào qù jīchǎng jiē péngyou.',
      meaning: 'Bây giờ tôi phải ra sân bay đón bạn.'
    }
  },
  {
    id: 'hsk2-21',
    hanzi: '教室',
    pinyin: 'jiàoshì',
    meaning: 'Phòng học, lớp học',
    level: 'HSK 2',
    type: 'Danh từ',
    example: {
      hanzi: '教室里有很多同学。',
      pinyin: 'Jiàoshì lǐ yǒu hěn duō tóngxué.',
      meaning: 'Trong phòng học có rất nhiều bạn học.'
    }
  },
  {
    id: 'hsk2-22',
    hanzi: '房间',
    pinyin: 'fángjiān',
    meaning: 'Căn phòng',
    level: 'HSK 2',
    type: 'Danh từ',
    example: {
      hanzi: '这个房间很干净。',
      pinyin: 'Zhè ge fángjiān hěn gānjìng.',
      meaning: 'Căn phòng này rất sạch sẽ.'
    }
  },
  {
    id: 'hsk2-23',
    hanzi: '路',
    pinyin: 'lù',
    meaning: 'Đường, con đường',
    level: 'HSK 2',
    type: 'Danh từ',
    example: {
      hanzi: '路上车很多，慢点开。',
      pinyin: 'Lùshang chē hěn duō, màn diǎn kāi.',
      meaning: 'Trên đường xe cộ rất đông, lái chậm chút nhé.'
    }
  },
  {
    id: 'hsk2-24',
    hanzi: '远',
    pinyin: 'yuǎn',
    meaning: 'Xa',
    level: 'HSK 2',
    type: 'Tính từ',
    example: {
      hanzi: '我家离学校不太远。',
      pinyin: 'Wǒ jiā lí xuéxiào bú tài yuǎn.',
      meaning: 'Nhà tôi cách trường học không xa lắm.'
    }
  },
  {
    id: 'hsk2-25',
    hanzi: '近',
    pinyin: 'jìn',
    meaning: 'Gần',
    level: 'HSK 2',
    type: 'Tính từ',
    example: {
      hanzi: '超市离这里很近。',
      pinyin: 'Chāoshì lí zhèlǐ hěn jìn.',
      meaning: 'Siêu thị cách đây rất gần.'
    }
  },
  {
    id: 'hsk2-26',
    hanzi: '快',
    pinyin: 'kuài',
    meaning: 'Nhanh, mau, sắp',
    level: 'HSK 2',
    type: 'Tính từ / Phó từ',
    example: {
      hanzi: '快走，火车快开了！',
      pinyin: 'Kuài zǒu, huǒchē kuài kāi le!',
      meaning: 'Đi nhanh lên, tàu hỏa sắp chạy rồi!'
    }
  },
  {
    id: 'hsk2-27',
    hanzi: '慢',
    pinyin: 'màn',
    meaning: 'Chậm',
    level: 'HSK 2',
    type: 'Tính từ',
    example: {
      hanzi: '请说慢一点儿。',
      pinyin: 'Qǐng shuō màn yìdiǎnr.',
      meaning: 'Xin vui lòng nói chậm lại một chút.'
    }
  },
  {
    id: 'hsk2-28',
    hanzi: '便宜',
    pinyin: 'piányi',
    meaning: 'Rẻ',
    level: 'HSK 2',
    type: 'Tính từ',
    example: {
      hanzi: '这件衣服又漂亮又便宜。',
      pinyin: 'Zhè jiàn yīfu yòu piàoliang yòu piányi.',
      meaning: 'Chiếc áo này vừa đẹp vừa rẻ.'
    }
  },
  {
    id: 'hsk2-29',
    hanzi: '贵',
    pinyin: 'guì',
    meaning: 'Đắt, quý',
    level: 'HSK 2',
    type: 'Tính từ',
    example: {
      hanzi: '这家饭馆的菜有点贵。',
      pinyin: 'Zhè jiā fànguǎn de cài yǒudiǎn guì.',
      meaning: 'Món ăn của quán ăn này hơi đắt.'
    }
  },
  {
    id: 'hsk2-30',
    hanzi: '新',
    pinyin: 'xīn',
    meaning: 'Mới',
    level: 'HSK 2',
    type: 'Tính từ',
    example: {
      hanzi: '这是我的新自行车。',
      pinyin: 'Zhè shì wǒ de xīn zìxíngchē.',
      meaning: 'Đây là chiếc xe đạp mới của tôi.'
    }
  },
  {
    id: 'hsk2-31',
    hanzi: '穿',
    pinyin: 'chuān',
    meaning: 'Mặc (quần áo), đi (giày dép)',
    level: 'HSK 2',
    type: 'Động từ',
    example: {
      hanzi: '她穿了一件红裙子。',
      pinyin: 'Tā chuān le yí jiàn hóng qúnzi.',
      meaning: 'Cô ấy mặc một chiếc váy đỏ.'
    }
  },
  {
    id: 'hsk2-32',
    hanzi: '洗',
    pinyin: 'xǐ',
    meaning: 'Rửa, giặt',
    level: 'HSK 2',
    type: 'Động từ',
    example: {
      hanzi: '吃饭前要先洗手。',
      pinyin: 'Chī fàn qián yào xiān xǐ shǒu.',
      meaning: 'Trước khi ăn cơm phải rửa tay trước.'
    }
  },
  {
    id: 'hsk2-33',
    hanzi: '哥哥',
    pinyin: 'gēge',
    meaning: 'Anh trai',
    level: 'HSK 2',
    type: 'Danh từ',
    example: {
      hanzi: '我哥哥比我大三岁。',
      pinyin: 'Wǒ gēge bǐ wǒ dà sān suì.',
      meaning: 'Anh trai lớn hơn tôi 3 tuổi.'
    }
  },
  {
    id: 'hsk2-34',
    hanzi: '姐姐',
    pinyin: 'jiějie',
    meaning: 'Chị gái',
    level: 'HSK 2',
    type: 'Danh từ',
    example: {
      hanzi: '我姐姐是护士。',
      pinyin: 'Wǒ jiějie shì hùshi.',
      meaning: 'Chị gái tôi là y tá.'
    }
  },
  {
    id: 'hsk2-35',
    hanzi: '弟弟',
    pinyin: 'dìdi',
    meaning: 'Em trai',
    level: 'HSK 2',
    type: 'Danh từ',
    example: {
      hanzi: '弟弟喜欢踢足球。',
      pinyin: 'Dìdi xǐhuan tī zúqiú.',
      meaning: 'Em trai thích đá bóng.'
    }
  },
  {
    id: 'hsk2-36',
    hanzi: '妹妹',
    pinyin: 'mèimei',
    meaning: 'Em gái',
    level: 'HSK 2',
    type: 'Danh từ',
    example: {
      hanzi: '妹妹在看动画片。',
      pinyin: 'Mèimei zài kàn dònghuàpiàn.',
      meaning: 'Em gái đang xem phim hoạt hình.'
    }
  },
  {
    id: 'hsk2-37',
    hanzi: '孩子',
    pinyin: 'háizi',
    meaning: 'Trẻ con, con cái',
    level: 'HSK 2',
    type: 'Danh từ',
    example: {
      hanzi: '小孩子们在公园里玩。',
      pinyin: 'Xiǎo háizimen zài gōngyuán lǐ wán.',
      meaning: 'Các bạn nhỏ đang chơi trong công viên.'
    }
  },
  {
    id: 'hsk2-38',
    hanzi: '服务员',
    pinyin: 'fúwùyuán',
    meaning: 'Nhân viên phục vụ',
    level: 'HSK 2',
    type: 'Danh từ',
    example: {
      hanzi: '服务员，请给我们菜单。',
      pinyin: 'Fúwùyuán, qǐng gěi wǒmen càidān.',
      meaning: 'Phục vụ ơi, xin cho chúng tôi thực đơn.'
    }
  },
  {
    id: 'hsk2-39',
    hanzi: '已经',
    pinyin: 'yǐjīng',
    meaning: 'Đã, rồi',
    level: 'HSK 2',
    type: 'Phó từ',
    example: {
      hanzi: '我已经写完作业了。',
      pinyin: 'Wǒ yǐjīng xiě wán zuòyè le.',
      meaning: 'Tôi đã làm xong bài tập rồi.'
    }
  },
  {
    id: 'hsk2-40',
    hanzi: '一起',
    pinyin: 'yìqǐ',
    meaning: 'Cùng nhau',
    level: 'HSK 2',
    type: 'Phó từ',
    example: {
      hanzi: '我们一起去买水果吧。',
      pinyin: 'Wǒmen yìqǐ qù mǎi shuǐguǒ ba.',
      meaning: 'Chúng mình cùng nhau đi mua hoa quả đi.'
    }
  }
];

// 2. EXERCISE TYPE: NHÌN HÌNH PHÁN ĐOÁN ĐÚNG SAI (Image True/False)
// Inline vector illustrations with rich visual details
const IMAGE_TRUE_FALSE_EXERCISES = [
  {
    id: 'itf-1',
    category: 'Đồ uống & Thức ăn',
    svg: `<svg viewBox="0 0 200 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="teaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#b45309"/>
        </linearGradient>
      </defs>
      <rect width="200" height="160" rx="16" fill="#fef3c7"/>
      <!-- Saucer -->
      <ellipse cx="100" cy="130" rx="65" ry="14" fill="#cbd5e1"/>
      <ellipse cx="100" cy="128" rx="55" ry="10" fill="#f8fafc"/>
      <!-- Cup Handle -->
      <path d="M 130 70 C 165 70 165 110 130 110" fill="none" stroke="#e2e8f0" stroke-width="12" stroke-linecap="round"/>
      <!-- Cup Body -->
      <path d="M 60 60 L 72 120 C 73 125 127 125 128 120 L 140 60 Z" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
      <!-- Tea Liquid -->
      <ellipse cx="100" cy="68" rx="36" ry="12" fill="url(#teaGrad)"/>
      <!-- Steam -->
      <path d="M 85 45 Q 80 35 88 25 Q 92 18 85 10" fill="none" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round" opacity="0.85"/>
      <path d="M 105 48 Q 112 38 104 28 Q 98 20 106 12" fill="none" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round" opacity="0.85"/>
      <!-- Tea leaf tag -->
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
    category: 'Hoa quả',
    svg: `<svg viewBox="0 0 200 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" rx="16" fill="#fee2e2"/>
      <!-- Shadow -->
      <ellipse cx="100" cy="138" rx="45" ry="10" fill="#fca5a5" opacity="0.6"/>
      <!-- Apple Body -->
      <path d="M 100 45 C 80 30 55 50 55 85 C 55 125 90 135 100 135 C 110 135 145 125 145 85 C 145 50 120 30 100 45 Z" fill="#ef4444"/>
      <!-- Highlight -->
      <path d="M 75 55 C 65 65 65 85 68 95" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity="0.5"/>
      <!-- Stem -->
      <path d="M 100 45 Q 103 28 112 22" fill="none" stroke="#78350f" stroke-width="5" stroke-linecap="round"/>
      <!-- Leaf -->
      <path d="M 104 36 C 118 30 130 35 128 42 C 120 48 108 42 104 36 Z" fill="#22c55e"/>
    </svg>`,
    statement: '这是西瓜。',
    pinyin: 'Zhè shì xīguā.',
    meaning: 'Đây là quả dưa hấu.',
    isCorrect: false,
    explanation: 'Hình vẽ là quả táo đỏ (苹果 - píngguǒ), không phải là quả dưa hấu (西瓜 - xīguā). Nhận định là SAI (错误).'
  },
  {
    id: 'itf-3',
    category: 'Thể thao & Hoạt động',
    svg: `<svg viewBox="0 0 200 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" rx="16" fill="#e0f2fe"/>
      <!-- Water pool -->
      <path d="M 0 100 Q 50 90 100 100 T 200 100 L 200 160 L 0 160 Z" fill="#38bdf8"/>
      <path d="M 0 115 Q 50 108 100 115 T 200 115 L 200 160 L 0 160 Z" fill="#0284c7" opacity="0.8"/>
      <!-- Swimmer -->
      <!-- Head & cap -->
      <circle cx="115" cy="72" r="14" fill="#fde047"/>
      <!-- Goggles -->
      <rect x="118" y="70" width="12" height="6" rx="3" fill="#0f172a"/>
      <!-- Arm stroke -->
      <path d="M 95 85 C 85 70 95 50 115 52 C 125 53 140 60 148 68" fill="none" stroke="#fbcfe8" stroke-width="9" stroke-linecap="round"/>
      <!-- Torso -->
      <path d="M 75 92 Q 95 85 110 88" stroke="#0284c7" stroke-width="14" stroke-linecap="round"/>
      <!-- Water ripples -->
      <circle cx="65" cy="100" r="8" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.7"/>
      <circle cx="140" cy="98" r="10" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.7"/>
    </svg>`,
    statement: '他在游泳。',
    pinyin: 'Tā zài yóuyǒng.',
    meaning: 'Anh ấy đang bơi lội.',
    isCorrect: true,
    explanation: 'Hình ảnh vẽ người đang bơi lội trong làn nước (游泳 - yóuyǒng). Nhận định là ĐÚNG (正确).'
  },
  {
    id: 'itf-4',
    category: 'Đồ vật học tập',
    svg: `<svg viewBox="0 0 200 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" rx="16" fill="#f3e8ff"/>
      <!-- Stack of books -->
      <!-- Book 1 (bottom) -->
      <rect x="40" y="105" width="120" height="24" rx="4" fill="#3b82f6"/>
      <rect x="45" y="110" width="115" height="14" fill="#ffffff"/>
      <rect x="38" y="105" width="12" height="24" rx="3" fill="#1d4ed8"/>
      <!-- Book 2 (middle) -->
      <rect x="48" y="80" width="110" height="22" rx="4" fill="#10b981"/>
      <rect x="52" y="85" width="105" height="12" fill="#ffffff"/>
      <rect x="46" y="80" width="11" height="22" rx="3" fill="#047857"/>
      <!-- Book 3 (top) -->
      <rect x="55" y="58" width="95" height="20" rx="4" fill="#f59e0b"/>
      <rect x="58" y="62" width="90" height="12" fill="#ffffff"/>
      <rect x="53" y="58" width="10" height="20" rx="3" fill="#b45309"/>
      <!-- Pencil on top -->
      <line x1="70" y1="45" x2="135" y2="45" stroke="#ef4444" stroke-width="6" stroke-linecap="round"/>
      <polygon points="135,42 145,45 135,48" fill="#fbcfe8"/>
      <polygon points="142,44 145,45 142,46" fill="#1e293b"/>
    </svg>`,
    statement: '这是一只猫。',
    pinyin: 'Zhè shì yì zhī māo.',
    meaning: 'Đây là một con mèo.',
    isCorrect: false,
    explanation: 'Hình minh họa là chồng sách (书 - shū) và cây bút, không phải là con mèo (猫 - māo). Nhận định là SAI (错误).'
  },
  {
    id: 'itf-5',
    category: 'Nghề nghiệp',
    svg: `<svg viewBox="0 0 200 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" rx="16" fill="#ecfdf5"/>
      <!-- Doctor cartoon -->
      <circle cx="100" cy="55" r="28" fill="#fed7aa"/>
      <!-- Doctor cap with red cross -->
      <path d="M 78 45 C 78 30 122 30 122 45 Z" fill="#ffffff"/>
      <rect x="96" y="33" width="8" height="8" fill="#ef4444"/>
      <rect x="94" y="35" width="12" height="4" fill="#ef4444"/>
      <!-- Eyes & Smile -->
      <circle cx="92" cy="56" r="3" fill="#334155"/>
      <circle cx="108" cy="56" r="3" fill="#334155"/>
      <path d="M 95 66 Q 100 70 105 66" fill="none" stroke="#334155" stroke-width="2" stroke-linecap="round"/>
      <!-- Body White Coat -->
      <path d="M 68 135 L 75 90 C 80 84 120 84 125 90 L 132 135 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <!-- Stethoscope -->
      <path d="M 86 88 C 86 112 114 112 114 88" fill="none" stroke="#0284c7" stroke-width="3"/>
      <circle cx="100" cy="115" r="6" fill="#64748b"/>
    </svg>`,
    statement: '他是医生。',
    pinyin: 'Tā shì yīshēng.',
    meaning: 'Anh ấy là bác sĩ.',
    isCorrect: true,
    explanation: 'Hình vẽ một bác sĩ mặc áo blu trắng, đội mũ chữ thập đỏ và đeo ống nghe (医生 - yīshēng). Nhận định là ĐÚNG (正确).'
  },
  {
    id: 'itf-6',
    category: 'Giao thông',
    svg: `<svg viewBox="0 0 200 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" rx="16" fill="#f0f9ff"/>
      <!-- Clouds -->
      <path d="M 30 50 Q 40 35 55 42 Q 70 30 85 45 Q 95 48 90 60 L 30 60 Z" fill="#ffffff" opacity="0.9"/>
      <path d="M 130 110 Q 140 95 155 102 Q 170 90 185 105 L 130 120 Z" fill="#ffffff" opacity="0.8"/>
      <!-- Airplane -->
      <path d="M 60 90 C 80 85 140 75 160 70 C 168 68 168 76 160 82 C 145 92 90 102 70 105 Z" fill="#3b82f6"/>
      <!-- Wing -->
      <polygon points="105,82 85,45 105,48 125,80" fill="#1d4ed8"/>
      <!-- Tail Wing -->
      <polygon points="62,90 50,70 60,70 70,89" fill="#1d4ed8"/>
      <!-- Jet Windows -->
      <circle cx="115" cy="80" r="2.5" fill="#ffffff"/>
      <circle cx="125" cy="78" r="2.5" fill="#ffffff"/>
      <circle cx="135" cy="76" r="2.5" fill="#ffffff"/>
      <circle cx="145" cy="74" r="2.5" fill="#ffffff"/>
    </svg>`,
    statement: '飞机在天上飞。',
    pinyin: 'Fēijī zài tiānshang fēi.',
    meaning: 'Máy bay đang bay trên bầu trời.',
    isCorrect: true,
    explanation: 'Hình vẽ chiếc máy bay (飞机 - fēijī) đang bay lượn giữa các đám mây trên trời. Nhận định là ĐÚNG (正确).'
  },
  {
    id: 'itf-7',
    category: 'Thời tiết',
    svg: `<svg viewBox="0 0 200 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" rx="16" fill="#e2e8f0"/>
      <!-- Dark Rain Cloud -->
      <path d="M 50 65 Q 60 40 85 45 Q 110 30 130 50 Q 155 45 155 70 Q 160 90 140 95 L 60 95 Q 40 90 50 65 Z" fill="#64748b"/>
      <!-- Raindrops -->
      <line x1="65" y1="110" x2="58" y2="125" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
      <line x1="85" y1="105" x2="78" y2="120" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
      <line x1="105" y1="112" x2="98" y2="127" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
      <line x1="125" y1="106" x2="118" y2="121" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
      <line x1="145" y1="115" x2="138" y2="130" stroke="#38bdf8" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
    statement: '今天天气很好，没下雨。',
    pinyin: 'Jīntiān tiānqì hěn hǎo, méi xià yǔ.',
    meaning: 'Hôm nay thời tiết rất đẹp, không mưa.',
    isCorrect: false,
    explanation: 'Hình vẽ mây đen và những hạt mưa đang rơi (正在下雨 - zhèngzài xià yǔ), câu mô tả nói "không mưa" là SAI (错误).'
  },
  {
    id: 'itf-8',
    category: 'Động vật',
    svg: `<svg viewBox="0 0 200 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" rx="16" fill="#fff7ed"/>
      <!-- Cat Head -->
      <circle cx="100" cy="90" r="38" fill="#fb923c"/>
      <!-- Ears -->
      <polygon points="70,68 65,35 88,58" fill="#ea580c"/>
      <polygon points="72,64 69,42 85,58" fill="#fed7aa"/>
      <polygon points="130,68 135,35 112,58" fill="#ea580c"/>
      <polygon points="128,64 131,42 115,58" fill="#fed7aa"/>
      <!-- Eyes -->
      <ellipse cx="86" cy="85" rx="5" ry="7" fill="#1e293b"/>
      <ellipse cx="114" cy="85" rx="5" ry="7" fill="#1e293b"/>
      <circle cx="84" cy="83" r="2" fill="#ffffff"/>
      <circle cx="112" cy="83" r="2" fill="#ffffff"/>
      <!-- Nose & Mouth -->
      <polygon points="98,95 102,95 100,98" fill="#be123c"/>
      <path d="M 95 100 Q 100 104 105 100" fill="none" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>
      <!-- Whiskers -->
      <line x1="68" y1="92" x2="52" y2="88" stroke="#1e293b" stroke-width="2"/>
      <line x1="68" y1="98" x2="50" y2="100" stroke="#1e293b" stroke-width="2"/>
      <line x1="132" y1="92" x2="148" y2="88" stroke="#1e293b" stroke-width="2"/>
      <line x1="132" y1="98" x2="150" y2="100" stroke="#1e293b" stroke-width="2"/>
    </svg>`,
    statement: '这是一只可爱的小猫。',
    pinyin: 'Zhè shì yì zhī kě\'ài de xiǎomāo.',
    meaning: 'Đây là một chú mèo con đáng yêu.',
    isCorrect: true,
    explanation: 'Hình ảnh vẽ một chú mèo con với tai và râu đặc trưng (小猫 - xiǎomāo). Nhận định là ĐÚNG (正确).'
  }
];

// 3. EXERCISE TYPE: ĐỌC CÂU HỎI CHỌN CÂU TRẢ LỜI ĐÚNG (Reading Comprehension Q&A)
const READING_COMPREHENSION_EXERCISES = [
  {
    id: 'rc-1',
    passage: '大卫是美国人，他在北京学习汉语。他每天早上七点半起床，八点去教室上课。中午他和中国同学一起在学校食堂吃饭。他很喜欢吃中国菜。',
    passagePinyin: 'Dàwèi shì Měiguó rén, tā zài Běijīng xuéxí Hànyǔ. Tā měitiān zǎoshang qī diǎn bàn qǐchuáng, bā diǎn qù jiàoshì shàngkè. Zhōngwǔ tā hé Zhōngguó tóngxué yìqǐ zài xuéxiào shítáng chī fàn. Tā hěn xǐhuan chī Zhōngguó cài.',
    passageMeaning: 'David là người Mỹ, anh ấy học tiếng Trung ở Bắc Kinh. Hàng ngày anh thức dậy lúc 7 giờ rưỡi sáng, 8 giờ đến phòng học lên lớp. Buổi trưa anh ăn cơm cùng các bạn học Trung Quốc ở nhà ăn trường học. Anh ấy rất thích ăn món Trung Quốc.',
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
    explanation: 'Đoạn văn nêu: "八点去教室上课" (8 giờ đến phòng học lên lớp). Bảy giờ rưỡi là giờ ngủ dậy (起床).'
  },
  {
    id: 'rc-2',
    passage: '李老师的家离学校不远。她每天走路去学校，不用坐出租车。李老师非常爱她的学生，同学们也都很喜欢她。',
    passagePinyin: 'Lǐ lǎoshī de jiā lí xuéxiào bù yuǎn. Tā měitiān zǒulù qù xuéxiào, bú yòng zuò chūzūchē. Lǐ lǎoshī fēicháng ài tā de xuésheng, tóngxuémen yě dōu hěn xǐhuan tā.',
    passageMeaning: 'Nhà của cô giáo Lý cách trường học không xa. Cô ấy mỗi ngày đều đi bộ đến trường, không cần đi xe taxi. Cô Lý rất yêu thương học sinh của mình, và các bạn học sinh cũng đều rất yêu quý cô.',
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
    explanation: 'Đoạn văn nêu rõ: "她每天走路去学校，不用坐出租车" (Cô ấy hàng ngày đi bộ đến trường, không cần đi taxi).'
  },
  {
    id: 'rc-3',
    passage: '王朋买了一只小狗。小狗的身体是白色的，眼睛黑黑的，非常漂亮。王朋每天下班回家，小狗都在门口等他。',
    passagePinyin: 'Wáng Péng mǎi le yì zhī xiǎogǒu. Xiǎogǒu de shēntǐ shì báisè de, yǎnjīng hēihēi de, fēicháng piàoliang. Wáng Péng měitiān xiàbān huí jiā, xiǎogǒu dōu zài ménkǒu děng tā.',
    passageMeaning: 'Vương Bằng đã mua một chú chó con. Thân chú chó màu trắng, mắt đen láy, rất đẹp. Mỗi ngày Vương Bằng tan sở về nhà, chú chó con đều đứng chờ ở cửa.',
    question: '小狗的身体是什么颜色的？',
    questionPinyin: 'Xiǎogǒu de shēntǐ shì shénme yánsè de?',
    questionMeaning: 'Thân hình chú chó màu gì?',
    options: [
      { text: '黑色 (Màu đen)' },
      { text: '白色 (Màu trắng)' },
      { text: '黄色 (Màu vàng)' },
      { text: '红色 (Màu đỏ)' }
    ],
    answerIndex: 1,
    explanation: 'Đoạn văn viết: "小狗的身体是白色的" (Thân của chú chó là màu trắng). Mắt mới là màu đen (眼睛黑黑的).'
  },
  {
    id: 'rc-4',
    passage: '明天是星期六，小明和朋友们打算去商店买东西。小明想买一件新衣服，小红想买几本汉语书。买完东西后，他们还要一起去看电影。',
    passagePinyin: 'Míngtiān shì xīngqīliù, Xiǎomíng hé péngyoumen dǎsuàn qù shāngdiàn mǎi dōngxi. Xiǎomíng xiǎng mǎi yí jiàn xīn yīfu, Xiǎohóng xiǎng mǎi jǐ běn Hànyǔ shū. Mǎi wán dōngxi hòu, tāmen hái yào yìqǐ qù kàn diànyǐng.',
    passageMeaning: 'Ngày mai là thứ Bảy, Tiểu Minh và bạn bè dự định đến cửa hàng mua đồ. Tiểu Minh muốn mua một chiếc áo mới, Tiểu Hồng muốn mua vài quyển sách tiếng Trung. Sau khi mua sắm xong, họ còn định cùng nhau đi xem phim.',
    question: '小红想买什么？',
    questionPinyin: 'Xiǎohóng xiǎng mǎi shénme?',
    questionMeaning: 'Tiểu Hồng muốn mua cái gì?',
    options: [
      { text: '一件新衣服 (Một chiếc áo mới)' },
      { text: '几本汉语书 (Vài quyển sách tiếng Trung)' },
      { text: '电影票 (Vé xem phim)' },
      { text: '一部新手机 (Một chiếc điện thoại mới)' }
    ],
    answerIndex: 1,
    explanation: 'Tiểu Minh muốn mua áo mới ("小明想买一件新衣服"), còn Tiểu Hồng muốn mua sách tiếng Trung ("小红想买几本汉语书").'
  }
];

// 4. EXERCISE TYPE: CHỌN BỘ TỪ ĐIỀN VÀO ĐOẠN VĂN (Cloze Passages / Fill-in-blanks)
const CLOZE_PASSAGES_EXERCISES = [
  {
    id: 'cloze-1',
    title: 'Một ngày của tôi (我的一天)',
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
      { key: 'D', hanzi: '高兴', pinyin: 'gāoxìng', meaning: 'vui mừng' },
      { key: 'E', hanzi: '生病', pinyin: 'shēngbìng', meaning: 'bị bệnh' }
    ],
    correctAnswers: {
      0: 'A', // 好
      1: 'B', // 商店
      2: 'C', // 苹果
      3: 'D'  // 高兴
    },
    fullText: '今天天气非常好 (A)。我和朋友一起去商店 (B) 买东西。我们买了几个红苹果 (C)，大家都非常高兴 (D)。',
    translation: 'Hôm nay thời tiết rất đẹp. Tôi và bạn cùng nhau đến cửa hàng mua đồ. Chúng tôi đã mua mấy quả táo đỏ, mọi người đều vô cùng vui vẻ.'
  },
  {
    id: 'cloze-2',
    title: 'Tại bệnh viện (在医院)',
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
      { key: 'D', hanzi: '休息', pinyin: 'xiūxi', meaning: 'nghỉ ngơi' },
      { key: 'E', hanzi: '跑步', pinyin: 'pǎobù', meaning: 'chạy bộ' }
    ],
    correctAnswers: {
      0: 'A', // 生病
      1: 'B', // 医院
      2: 'C', // 医生
      3: 'D'  // 休息
    },
    fullText: '大卫昨天生病 (A) 了，今天早上他去医院 (B) 看病。医生 (C) 告诉他要多喝水、多休息 (D)。',
    translation: 'David hôm qua bị ốm rồi, sáng nay anh ấy đến bệnh viện khám bệnh. Bác sĩ bảo anh ấy phải uống nhiều nước, nghỉ ngơi nhiều.'
  },
  {
    id: 'cloze-3',
    title: 'Sở thích thể thao (运动爱好)',
    textParts: [
      '我和哥哥都喜欢运动。哥哥喜欢在操场',
      '，而我更喜欢去泳池',
      '。运动让我们的',
      '越来越好。'
    ],
    blankCount: 3,
    wordBank: [
      { key: 'A', hanzi: '踢足球', pinyin: 'tī zúqiú', meaning: 'đá bóng' },
      { key: 'B', hanzi: '游泳', pinyin: 'yóuyǒng', meaning: 'bơi lội' },
      { key: 'C', hanzi: '身体', pinyin: 'shēntǐ', meaning: 'sức khỏe, cơ thể' },
      { key: 'D', hanzi: '唱歌', pinyin: 'chànggē', meaning: 'hát' }
    ],
    correctAnswers: {
      0: 'A', // 踢足球
      1: 'B', // 游泳
      2: 'C'  // 身体
    },
    fullText: '我和哥哥都喜欢运动。哥哥喜欢在操场踢足球 (A)，而我更喜欢去泳池游泳 (B)。运动让我们的身体 (C) 越来越好。',
    translation: 'Tôi và anh trai đều thích thể thao. Anh trai thích đá bóng ở sân tập, còn tôi thích đi bơi ở hồ bơi hơn. Thể thao giúp sức khỏe của chúng tôi ngày càng tốt.'
  }
];

// 5. EXERCISE TYPE: NHÌN PHIÊN ÂM VIẾT HÁN TỰ (Pinyin to Hanzi)
const PINYIN_TO_HANZI_EXERCISES = [
  {
    id: 'pth-1',
    pinyin: 'lǎoshī',
    meaning: 'Thầy / cô giáo',
    hanzi: '老师',
    hint: 'Lǎoshī (người dạy học)',
    tiles: ['老', '师', '学', '生', '大', '家']
  },
  {
    id: 'pth-2',
    pinyin: 'píngguǒ',
    meaning: 'Quả táo',
    hanzi: '苹果',
    hint: 'Píngguǒ (trái cây tròn ngọt)',
    tiles: ['苹', '果', '西', '瓜', '茶', '水']
  },
  {
    id: 'pth-3',
    pinyin: 'xièxie',
    meaning: 'Cảm ơn',
    hanzi: '谢谢',
    hint: 'Xièxie (lời cảm ơn)',
    tiles: ['谢', '谢', '不', '客', '气', '对']
  },
  {
    id: 'pth-4',
    pinyin: 'xuéxí',
    meaning: 'Học tập',
    hanzi: '学习',
    hint: 'Xuéxí (trau dồi kiến thức)',
    tiles: ['学', '习', '校', '生', '汉', '字']
  },
  {
    id: 'pth-5',
    pinyin: 'péngyou',
    meaning: 'Bạn bè',
    hanzi: '朋友',
    hint: 'Péngyou (tri kỷ, bạn hữu)',
    tiles: ['朋', '友', '同', '学', '他', '她']
  },
  {
    id: 'pth-6',
    pinyin: 'bāngzhù',
    meaning: 'Giúp đỡ',
    hanzi: '帮助',
    hint: 'Bāngzhù (hỗ trợ tương trợ)',
    tiles: ['帮', '助', '请', '问', '工', '作']
  },
  {
    id: 'pth-7',
    pinyin: 'fēijī',
    meaning: 'Máy bay',
    hanzi: '飞机',
    hint: 'Fēijī (phương tiện bay)',
    tiles: ['飞', '机', '车', '场', '开', '天']
  },
  {
    id: 'pth-8',
    pinyin: 'gāoxìng',
    meaning: 'Vui vẻ, mừng rỡ',
    hanzi: '高兴',
    hint: 'Gāoxìng (tâm trạng tươi vui)',
    tiles: ['高', '兴', '快', '乐', '好', '心']
  }
];

// 6. EXERCISE TYPE: SẮP XẾP TỪ THÀNH CÂU HOÀN CHỈNH (Sentence Unscramble)
const SENTENCE_ORDERING_EXERCISES = [
  {
    id: 'so-1',
    tokens: ['我想', '去', '北京', '看', '朋友', '。'],
    scrambled: ['看', '北京', '我想', '。', '朋友', '去'],
    correctSentence: '我想去北京看朋友。',
    pinyin: 'Wǒ xiǎng qù Běijīng kàn péngyou.',
    vietnamese: 'Tôi muốn đi Bắc Kinh thăm bạn.',
    grammarPoint: 'Cấu trúc câu liên động (连动句): Chủ ngữ + Động từ 1 (đến nơi nào) + Động từ 2 (làm gì).'
  },
  {
    id: 'so-2',
    tokens: ['今天', '天气', '很', '好', '。'],
    scrambled: ['好', '今天', '。', '天气', '很'],
    correctSentence: '今天天气很好。',
    pinyin: 'Jīntiān tiānqì hěn hǎo.',
    vietnamese: 'Hôm nay thời tiết rất đẹp.',
    grammarPoint: 'Câu vị ngữ tính từ: Chủ từ + Phó từ chỉ mức độ (很) + Tính từ.'
  },
  {
    id: 'so-3',
    tokens: ['他', '在', '医院', '工作', '。'],
    scrambled: ['工作', '在', '他', '。', '医院'],
    correctSentence: '他在医院工作。',
    pinyin: 'Tā zài yīyuàn gōngzuò.',
    vietnamese: 'Anh ấy làm việc ở bệnh viện.',
    grammarPoint: 'Cấu trúc giới từ chỉ địa điểm: Chủ ngữ + 在 + Nơi chốn + Động từ (Làm việc ở đâu, tiếng Trung đặt [Ở đâu] trước [Hành động]).'
  },
  {
    id: 'so-4',
    tokens: ['你会', '说', '汉语', '吗', '？'],
    scrambled: ['吗', '你会', '汉语', '？', '说'],
    correctSentence: '你会说汉语吗？',
    pinyin: 'Nǐ huì shuō Hànyǔ ma?',
    vietnamese: 'Bạn biết nói tiếng Trung không?',
    grammarPoint: 'Câu hỏi có trợ từ nghi vấn 吗 đặt ở cuối câu khẳng định.'
  },
  {
    id: 'so-5',
    tokens: ['我们', '一起', '去', '吃', '米饭', '吧', '。'],
    scrambled: ['吃', '吧', '去', '一起', '米饭', '。', '我们'],
    correctSentence: '我们一起去吃米饭吧。',
    pinyin: 'Wǒmen yìqǐ qù chī mǐfàn ba.',
    vietnamese: 'Chúng mình cùng nhau đi ăn cơm nhé.',
    grammarPoint: 'Phó từ 一起 (cùng nhau) đứng trước cụm động từ; 吧 biểu thị ngữ khí đề nghị nhẹ nhàng.'
  },
  {
    id: 'so-6',
    tokens: ['桌子上', '有', '三本', '汉语书', '。'],
    scrambled: ['汉语书', '有', '桌子上', '三本', '。'],
    correctSentence: '桌子上有三本汉语书。',
    pinyin: 'Zhuōzi shang yǒu sān běn Hànyǔ shū.',
    vietnamese: 'Trên bàn có ba quyển sách tiếng Trung.',
    grammarPoint: 'Câu tồn hiện (存现句): Từ chỉ nơi chốn (桌子上) + 有 + Lượng từ + Danh từ.'
  }
];

// 7. EXERCISE TYPE: DỊCH CÂU VIỆT SANG TRUNG (Translation Practice)
const TRANSLATION_EXERCISES = [
  {
    id: 'trans-1',
    vietnamese: 'Ngày mai bạn có rảnh không? Chúng ta đi uống cà phê nhé.',
    targetHanzi: '明天你有空吗？我们去喝咖啡吧。',
    pinyin: 'Míngtiān nǐ yǒu kòng ma? Wǒmen qù hē kāfēi ba.',
    options: [
      { text: '明天你有空吗？我们去喝咖啡吧。', isCorrect: true },
      { text: '你有空明天吗？我们去喝咖啡呢。', isCorrect: false },
      { text: '明天你空有吗？我们喝咖啡去吗。', isCorrect: false }
    ],
    explanation: 'Từ chỉ thời gian "明天" đứng trước chủ ngữ hoặc sau chủ ngữ, trước vị ngữ. Trợ từ ngữ khí "吧" dùng cuối câu đề nghị/rủ rê.'
  },
  {
    id: 'trans-2',
    vietnamese: 'Tôi không thích xem phim này, nó hơi dài.',
    targetHanzi: '我不喜欢看这个电影，它有点儿长。',
    pinyin: 'Wǒ bù xǐhuan kàn zhè ge diànyǐng, tā yǒudiǎnr cháng.',
    options: [
      { text: '我没喜欢看这个电影，它一点儿长。', isCorrect: false },
      { text: '我不喜欢看这个电影，它有点儿长。', isCorrect: true },
      { text: '我不喜欢看这电影个，它真长。', isCorrect: false }
    ],
    explanation: 'Phủ định cảm xúc/ý chí "xǐhuan" dùng "bù" (không dùng "méi"). Cụm "yǒudiǎnr + tính từ" (hơi...) biểu thị ý không vừa lòng.'
  },
  {
    id: 'trans-3',
    vietnamese: 'Nhà của tôi cách trường học rất gần, đi bộ mười phút là tới.',
    targetHanzi: '我家离学校很近，走路十分钟就到了。',
    pinyin: 'Wǒ jiā lí xuéxiào hěn jìn, zǒulù shí fēnzhōng jiù dào le.',
    options: [
      { text: '我家在学校很近，走路十分钟就到了。', isCorrect: false },
      { text: '我家离学校很近，走路十分钟就到了。', isCorrect: true },
      { text: '我家从学校很近，走路十分钟就到了。', isCorrect: false }
    ],
    explanation: 'Cấu trúc chỉ khoảng cách giữa 2 địa điểm trong tiếng Hán: "A 离 B + tính từ khoảng cách (远 / 近)". Không dùng "在" hay "从".'
  },
  {
    id: 'trans-4',
    vietnamese: 'Hôm qua anh ấy không đến trường vì bị ốm.',
    targetHanzi: '昨天他没来学校，因为他生病了。',
    pinyin: 'Zuótiān tā méi lái xuéxiào, yīnwèi tā shēngbìng le.',
    options: [
      { text: '昨天他不来学校，因为他生病了。', isCorrect: false },
      { text: '昨天他没来学校，因为他生病了。', isCorrect: true },
      { text: '昨天他没去学校，虽然他生病了。', isCorrect: false }
    ],
    explanation: 'Hành động chưa xảy ra trong quá khứ ("hôm qua không đến") dùng "没 (méi)", không dùng "不 (bù)". Dùng liên từ "因为 (bởi vì)".'
  }
];

// 8. EXERCISE TYPE: HOÀN THÀNH HỘI THOẠI 2 LƯỢT TRẢ LỜI (2-turn Dialogue Completion)
const TWO_TURN_DIALOGUES = [
  {
    id: 'dial-1',
    topic: 'Hỏi đường đến thư viện (问路)',
    partner: {
      name: 'Bạn học Trương (张同学)',
      role: 'Người qua đường thân thiện'
    },
    // Turn 1
    turn1: {
      prompt: '你好，请问学校图书馆怎么走？',
      pinyin: 'Nǐ hǎo, qǐngwèn xuéxiào túshūguǎn zěnme zǒu?',
      meaning: 'Xin chào, cho hỏi thư viện trường đi như thế nào ạ?',
      options: [
        {
          text: '一直往前走，在第二个路口向右拐就是。',
          pinyin: 'Yìzhí wǎng qián zǒu, zài dì-èr ge lùkǒu xiàng yòu guǎi jiù shì.',
          meaning: 'Cứ đi thẳng về phía trước, ở ngã rẽ thứ hai rẽ phải là tới.',
          isCorrect: true,
          feedback: 'Chỉ đường rất chính xác và lịch sự!'
        },
        {
          text: '我不喜欢喝绿茶。',
          pinyin: 'Wǒ bù xǐhuan hē lǜchá.',
          meaning: 'Tôi không thích uống trà xanh.',
          isCorrect: false,
          feedback: 'Lạc đề hoàn toàn, bạn ấy đang hỏi đường.'
        },
        {
          text: '今天星期天，不用去上课。',
          pinyin: 'Jīntiān xīngqītiān, bú yòng qù shàngkè.',
          meaning: 'Hôm nay chủ nhật, không cần đi học.',
          isCorrect: false,
          feedback: 'Không trả lời trúng câu hỏi của người qua đường.'
        }
      ]
    },
    // Turn 2
    turn2: {
      prompt: '好的，太感谢你了！那里离这里远吗？',
      pinyin: 'Hǎo de, tài gǎnxiè nǐ le! Nàlǐ lí zhèlǐ yuǎn ma?',
      meaning: 'Vâng, cảm ơn bạn nhiều lắm! Chỗ đó cách đây có xa không?',
      options: [
        {
          text: '很近，走五分钟就到了。祝你学习愉快！',
          pinyin: 'Hěn jìn, zǒu wǔ fēnzhōng jiù dào le. Zhù nǐ xuéxí yúkuài!',
          meaning: 'Rất gần, đi bộ 5 phút là tới nơi rồi. Chúc bạn học tập vui vẻ!',
          isCorrect: true,
          feedback: 'Tuyệt vời! Kết thúc cuộc hội thoại rất tự nhiên và ấm áp.'
        },
        {
          text: '这个手机两千块钱。',
          pinyin: 'Zhè ge shǒujī liǎng qiān kuài qián.',
          meaning: 'Chiếc điện thoại này hai nghìn tệ.',
          isCorrect: false,
          feedback: 'Người ta đang hỏi xa hay gần chứ không hỏi giá tiền!'
        },
        {
          text: '对不起，我是医生。',
          pinyin: 'Duìbuqǐ, wǒ shì yīshēng.',
          meaning: 'Xin lỗi, tôi là bác sĩ.',
          isCorrect: false,
          feedback: 'Câu trả lời không logic với câu hỏi khoảng cách.'
        }
      ]
    }
  },
  {
    id: 'dial-2',
    topic: 'Gọi món ở quán ăn (在饭馆点菜)',
    partner: {
      name: 'Nhân viên phục vụ (服务员)',
      role: 'Nhân viên nhà hàng'
    },
    turn1: {
      prompt: '您好，欢迎光临！请问您想吃点儿什么？',
      pinyin: 'Nín hǎo, huānyíng guānglín! Qǐngwèn nín xiǎng chī diǎnr shénme?',
      meaning: 'Kính chào quý khách! Xin hỏi quý khách muốn dùng món gì ạ?',
      options: [
        {
          text: '服务员，请给我一份宫保鸡丁和一碗米饭。',
          pinyin: 'Fúwùyuán, qǐng gěi wǒ yí fèn gōngbǎojīdīng hé yì wǎn mǐfàn.',
          meaning: 'Phục vụ ơi, cho tôi một phần gà Kung Pao và một bát cơm trắng.',
          isCorrect: true,
          feedback: 'Rất chuẩn! Gọi món rõ ràng kèm lượng từ chính xác (份, 碗).'
        },
        {
          text: '我要去机场接朋友。',
          pinyin: 'Wǒ yào qù jīchǎng jiē péngyou.',
          meaning: 'Tôi phải ra sân bay đón bạn.',
          isCorrect: false,
          feedback: 'Bạn đang ở quán ăn, câu này không phù hợp.'
        },
        {
          text: '今天天气很冷。',
          pinyin: 'Jīntiān tiānqì hěn lěng.',
          meaning: 'Hôm nay thời tiết rất lạnh.',
          isCorrect: false,
          feedback: 'Không đáp lại yêu cầu gọi món.'
        }
      ]
    },
    turn2: {
      prompt: '好的，已经为您记下了。请问您需要喝点儿什么饮料吗？',
      pinyin: 'Hǎo de, yǐjīng wèi nín jì xià le. Qǐngwèn nín xūyào hē diǎnr shénme yǐnliào ma?',
      meaning: 'Dạ được rồi, em đã ghi lại rồi ạ. Xin hỏi quý khách có cần dùng đồ uống gì không ạ?',
      options: [
        {
          text: '请给我一杯热绿茶，谢谢。',
          pinyin: 'Qǐng gěi wǒ yì bēi rè lǜchá, xièxie.',
          meaning: 'Xin cho tôi một tách trà xanh nóng nhé, cảm ơn bạn.',
          isCorrect: true,
          feedback: 'Hoàn hảo! Trả lời đúng đồ uống mong muốn.'
        },
        {
          text: '我不会写汉字。',
          pinyin: 'Wǒ bú huì xiě hànzì.',
          meaning: 'Tôi không biết viết chữ Hán.',
          isCorrect: false,
          feedback: 'Nhân viên hỏi đồ uống, không hỏi kỹ năng viết chữ Hán.'
        },
        {
          text: '明天见，再见！',
          pinyin: 'Míngtiān jiàn, zàijiàn!',
          meaning: 'Ngày mai gặp, tạm biệt!',
          isCorrect: false,
          feedback: 'Bạn vừa mới gọi món xong, chưa thể tạm biệt ra về được.'
        }
      ]
    }
  },
  {
    id: 'dial-3',
    topic: 'Làm quen bạn mới tại trường (新同学打招呼)',
    partner: {
      name: 'Vương Lệ (王丽)',
      role: 'Bạn học cùng lớp'
    },
    turn1: {
      prompt: '你好！我是王丽，中文系一年级学生。你叫什么名字？',
      pinyin: 'Nǐ hǎo! Wǒ shì Wáng Lì, Zhōngwén xì yī niánjí xuésheng. Nǐ jiào shénme míngzi?',
      meaning: 'Chào bạn! Mình là Vương Lệ, sinh viên năm nhất khoa tiếng Trung. Bạn tên là gì?',
      options: [
        {
          text: '你好王丽！我叫阮文南，也是一年级新生。很高兴认识你！',
          pinyin: 'Nǐ hǎo Wáng Lì! Wǒ jiào Ruǎn Wénnán, yě shì yī niánjí xīnshēng. Hěn gāoxìng rènshi nǐ!',
          meaning: 'Chào Vương Lệ! Mình tên là Nguyễn Văn Nam, cũng là tân sinh viên năm nhất. Rất vui được biết bạn!',
          isCorrect: true,
          feedback: 'Tự giới thiệu bản thân rất chuẩn mực và thân thiện!'
        },
        {
          text: '这个苹果五块钱。',
          pinyin: 'Zhè ge píngguǒ wǔ kuài qián.',
          meaning: 'Quả táo này năm tệ.',
          isCorrect: false,
          feedback: 'Người ta hỏi tên mà lại báo giá táo!'
        },
        {
          text: '没关系，我不客气。',
          pinyin: 'Méi guānxi, wǒ bú kèqi.',
          meaning: 'Không sao, tôi không khách sáo.',
          isCorrect: false,
          feedback: 'Dùng sai mẫu câu giao tiếp khi làm quen.'
        }
      ]
    },
    turn2: {
      prompt: '我也很高兴认识你！放学后你打算做什么？要不要一起去图书馆？',
      pinyin: 'Wǒ yě hěn gāoxìng rènshi nǐ! Fàngxué hòu nǐ dǎsuàn zuò shénme? Yào bu yào yìqǐ qù túshūguǎn?',
      meaning: 'Mình cũng rất vui được quen bạn! Sau giờ học bạn định làm gì? Có muốn cùng đi thư viện không?',
      options: [
        {
          text: '好啊！我正想去借两本汉字书，放学后我们在门口见吧。',
          pinyin: 'Hǎo a! Wǒ zhèng xiǎng qù jiè liǎng běn hànzì shū, fàngxué hòu wǒmen zài ménkǒu jiàn ba.',
          meaning: 'Được chứ! Mình đang muốn đi mượn hai quyển sách chữ Hán, tan học tụi mình gặp nhau ở cổng nhé.',
          isCorrect: true,
          feedback: 'Đồng ý lời rủ và hẹn địa điểm rất tự nhiên!'
        },
        {
          text: '我不认识大夫。',
          pinyin: 'Wǒ bú rènshi dàifu.',
          meaning: 'Tôi không quen biết bác sĩ.',
          isCorrect: false,
          feedback: 'Không liên quan đến lời mời đi thư viện.'
        },
        {
          text: '昨天我吃了米饭。',
          pinyin: 'Zuótiān wǒ chī le mǐfàn.',
          meaning: 'Hôm qua tôi đã ăn cơm.',
          isCorrect: false,
          feedback: 'Đang bàn về kế hoạch sau giờ học hôm nay.'
        }
      ]
    }
  }
];
