
export class Common {
    static SERVER_URL: string = 'http://api.tlogin.net/basium/';
    static HOST: string = "http://api.tlogin.net/basium/";
    static PREFERENCES_TAG: string = 'Basium';
    static currency: string = 'SAR';

    static mark_country: any = {
        'US' : 'USA',  'JP' : 'JAPAN', 'CN' : 'CHINA', 'EU' : 'EUROPE',
        'AU' : 'AUSTRILIA / NEW ZEALAND', 'AS' : 'SOUTH EAST ASIA' , 'ET' : 'ETC'
      };
    static country_mark: any = {
        'USA' : 'US', 'JAPAN' : 'JP', 'CHINA' : 'CN', 'EUROPE' : 'EU',
        'AUSTRILIA / NEW ZEALAND' : 'AU', 'SOUTH EAST ASIA' : 'AS' , 'ETC' : 'ET'
      };
    static key_fta: any = {
        '1' : '해당없음',
        '2' : '한-미 FTA',
        '3' : '한-EU FTA',
        '4' : '한-중 FTA'
      };
    static application_id: string = '5cf46a98396fa67ca2bd0881';
    static app_link: any = {
      'customs_office' : {
        'ios_url' : 'https://apps.apple.com/kr/app/%EB%AA%A8%EB%B0%94%EC%9D%BC-%EA%B4%80%EC%84%B8%EC%B2%AD/id1100073666',
        'android_url' : 'https://play.google.com/store/apps/details?id=kr.go.kcs.mobile.pubservice',
        'packagename' : 'kr.go.kcs.mobile.pubservice'
      } ,
      'ijiro' : {
        'ios_url' : 'https://apps.apple.com/kr/app/%EB%AA%A8%EB%B0%94%EC%9D%BC%EC%A7%80%EB%A1%9C/id385847124',
        'android_url' : 'https://play.google.com/store/apps/details?id=kr.or.giro.android&hl=ko',
        'packagename' : 'kr.or.giro.android'
      }
    };
    static card_identify: any = {
      '3560': 'BC카드 ', '3562': '신한카드', '356316': 'NH농협카드(실버)', '356317': 'NH농협카드(골드)',
      '3563XX': 'NH농협카드(골드)', '356415': 'KB국민카드(K-World)', '356516': 'NH농협카드 (W)',
      '356517': 'NH농협카드 (W)', '3565XX': 'BC카드 법인', '356800': '하나카드(개인실버)',
      '356801': '하나카드(개인골드)', '356802': '하나카드(법인실버)', '356803': '하나카드(법인골드)',
      '356820': '우리카드비씨카드(실버)', '356900': '신한카드(실버)', '356901': '신한카드(골드)',
      '356902': '신한카드(법인)', '356910': 'KB국민카드(법인)', '356911': 'KB국민카드(실버)',
      '356912': 'KB국민카드(골드)', '356914': '롯데카드(실버)', '356915': '롯데카드(골드)', '356916': '롯데카드(법인)',
      '3616': '현대카드', '371001' : '하나카드', '371002' : '하나카드', '371003' : '하나카드', '374722' : '하나카드',
      '374723' : '하나카드', '374724' : '하나카드', '375144' : 'KB국민카드(플래티넘)', '375987' : '삼성카드(센츄리온)',
      '376272' : '롯데카드', '376277' : '롯데카드', '376364' : 'KB국민카드(골드)', '377969' : '하나카드(글로벌 페이 체크)',
      '377973' : '롯데카드(플래티넘)', '377981' : '신한카드(실버)', '377982' : '신한카드(골드)', '377988' : '신한카드(S&)',
      '377989' : '삼성카드(센츄리온 플래티넘)', '379183' : '삼성카드', '379192' : '하나카드', '379193' : '하나카드 법인',
      '402367' : '하나카드(체크)', '402857' : '현대카드', '404678' : '신한카드 비씨카드(실버)', '404825' : '비씨카드',
      '406357' : '씨티카드의 신세계 플래티늄카드', '4061':  '우리카드', '4062': '우리카드', '4063': '우리카드', '4064': '우리카드',
      '4065': '우리카드', '405753': '신한카드(선불)', '410109': '씨티카드', '411900': '하나카드(플래티늄)', '411904': '하나카드넘버앤카드',
      '411905': '하나카드', '414025': '비씨카드 법인', '418123': '현대카드', '418236': '하나카드의 시그니쳐 카드',
      '421417': '수협중앙회(체크)', '421418': '수협중앙회(플래티늄)', '421420': '우리카드 비씨카드(체크)', '421468': '롯데카드(체크)',
      '422155': '신한카드(신용)', '422190': '수협중앙회 기프트카드', '422727': '씨티카드 비씨카드(체크)', '4309': '(72체크) 신한카드마이홈플',
      '432445': '수협중앙회(법인골드)', '433028': '현대카드(플래티늄)', '433290': 'KB국민카드(플래티늄)', '434975': '신한카드',
      '436420': '신한카드(체크)', '438676': '신한카드(플래티늄)', '443233': '구,LG카드', '440025': '하나카드 비씨카드(체크)',
      '440446': '씨티카드(실버)', '4450': '비자카드 시그니처카드', '447320': '우리카드 비씨카드(체크)', '4481XX': '비씨카드(체크)',
      '449914': '신한카드(체크)', '451245': '삼성카드(체크)', '451281': '현대카드', '451842': '신한카드(실버)', '451845': '신한카드(체크)',
      '4553XX': '비씨카드(골드)', '455437': '하나카드(체크)', '457047': '하나카드', '457972': 'KB국민카드(실버)', '457973': 'KB국민카드(골드)',
      '458532': '삼성카드(체크)', '459900': '하나카드(실버)', '459912': '케이뱅크', '459930': '하나카드(체크)', '459950': '하나카드(골드)',
      '459952': '광주은행', '460561': '신한카드(체크)', '462890': '씨티카드의 씨티 프리미어마일 카드', '463916': '제주은행(체크)',
      '464942': '삼성카드(체크)', '464959': '롯데카드(체크)', '4655XX': '하나카드(체크)', '4656XX': '케이뱅크(체크)',
      '465887': '신한카드(플래티늄)', '465889': '수협카드(체크)', '467008': '롯데카드(신용)', '4673XX': '국민카드(체크)',
      '470587': '삼성카드(체크)', '470588': '삼성카드(체크)', '474360': '씨티카드 신세계백화점', '485479': 'NH농협카드(체크)',
      '490220': '우리카드 비씨카드(신용)', '4906XX': '비씨카드', '493455': '하나카드 VIVA+체크',
      '502123': 'KB국민카드', '510737': '신한카드(체크)', '511187': '신한카드(체크)', '512360': '삼성카드', '512462': '롯데카드(골드)',
      '514876': '씨티카드(플래티늄)', '515594': '신한카드(플래티늄)', '515954': '우리카드(체크)', '516574': '하나카드(플래티늄체크)',
      '517134': '신한카드(플래티늄체크)', '518831': '삼성카드', '523830': '하나카드(체크)', '524040': 'NH농협카드(티타늄)',
      '524041': 'NH농협카드(티타늄)', '524144': '씨티카드 리워드카드', '524242': '하나카드(체크)', '524333': '현대카드(플래티늄)',
      '524335': '하나카드넘버엔카드', '524353': '하나카드(플래티늄)', '527289': 'KB국민카드(체크)', '531070': '삼성카드',
      '531838': '하나카드(체크)', '532092': '하나카드(비바G 체크)', '535020': '우리카드 다모아카드', '536X': '카카오뱅크(체크)',
      '537120': '우리카드 블루다이아몬드카드', '537145': '우리카드 그랑블루 체크카드', '538159': '비씨카드(우체국 체크)',
      '538720': '우리카드 비씨카드', '5388XX': '비씨카드', '538920': '우리카드(체크)', '540447': '삼성카드 플레티늄',
      '540926': 'KB국민카드(골드)', '540947': 'KB국민카드(실버)', '543000': 'NH농협카드', '543333': '현대카드', '542158': '신한카드',
      '542416': 'NH농협카드', '542879': '신한카드 AK플라자카드', '546252': '하나카드', '548020': '우리카드 한국장학재단체크카드',
      '552070': '삼성카드 플레티늄', '552220': '우리카드의 플래티늄 비씨카드', '552290': '현대카드(레드)', '552377': '현대카드',
      '552576': '신한카드', '554346': 'KB국민카드 프리패스카드', '554959': 'KB국민카드 굿데이플래티늄카드',
      '558526': 'KB국민카드(체크)', '559410': '신한카드(체크)', '502928' : '하나카드(체크)', '588644' : '씨티은행 국제직불카드',
      '5898': 'Maestro, Plus직불카드', '6048xx': '비씨카드', '606045': '신한카드', '6360XX': '비씨카드', '636189': '하나카드의 티드림체크카드',
      '62': '(중국 은련카드)' ,  '6210XX': '비씨카드(체크)' , '625104': '롯데카드(신용)' , '6253XX': '비씨카드(신용)' ,
      '625804': 'KB국민카드(신용 K-World)', '625817': '삼성카드(신용)', '625904': '롯데카드(신용)', '65':'(비씨 글로벌카드)',
      '6541XX': 'BC카드', '6556XX': 'BC카드(신용)', '657020': '우리카드(체크)', '9000XX': '국내전용 직불 카드',
      '940010' : '씨티은행 신세계쿼트로', '940701' : '수협중앙회', '940702' : '수협중앙회(체크)', '940915' : '롯데카드(골드)',
      '940951' : '롯데카드(체크)', '9410XX' : '비씨카드(실버 일반)', '941009' : '삼성카드(신용)', '941029' : '삼성카드(체크)',
      '941061' : '신한카드(신용)', '941083' : '신한카드(선불)', '941085' : '삼성카드(신용)', '941088' : '삼성카드(체크)',
      '941161' : '신한카드 나라사랑카드', '9420XX' : '비씨카드(실버 우량)', '942061' : '신한카드(체크)', '942090' : '삼성카드(선불)' ,
      '941090' : '삼성카드(선불)', '942150' : '비씨카드(우체국 바로 듀얼)', '9430XX' : '비씨카드(골드)', '943150' : '비씨카드(KDB산업은행 바로 듀얼)',
      '943645' : 'KB국민카드(체크)', '943646' : 'KB국민카드(체크)', '9440XX' : '비씨카드 하나카드(체크)',
      '944116' : 'NH농협카드(체크)', '944520' : '우리카드 비씨카드(체크)', '944541' : 'KB국민카드(실버)', '944542' : 'KB국민카드(골드)',
      '944547' : 'KB국민카드(선불)', '9460XX' : '비씨카드 기프트카드', '9461XX' : '비씨카드(체크-스쿨카드)', '949013' : '현대카드(체크)',
      '949019' : '현대카드(신용)', '949028' : '현대카드(체크)', '949094' : 'KB국민카드 나라사랑카드', '949097' : '현대카드(M,X,이마트e 체크카드)',
      '953003' : '광주은행(체크)'
    }

    card_bank_name = '카카오뱅크';

    constructor() {
    }
    getCardName(card_num1 , card_num2) {
      let card_num = card_num1 + card_num2;
      let compare_count = 0;
      Object.keys(Common.card_identify).forEach(key => {
          compare_count = 0;
          for(var i = 0; i < key.length; i ++)  {
              if(key.charAt(i) != card_num.charAt(i) && key.charAt(i) != 'X') {
                  if(key == '514876') {
                    console.log('heyheyhye' , key.charAt(i) , card_num.charAt(i));
                  }
                  compare_count = 1;
                  break;
              }
          }
          if(compare_count == 0) {
            console.log(key);
            this.card_bank_name = Common.card_identify[key];
          }
      });
    }
  }
