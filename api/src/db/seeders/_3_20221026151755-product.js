'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const productList = [
      {
        id: 1,
        name: 'น้ำชาเขียว โออิชิกรีนที ',
        desc: "โออิชิ ชาเขียว รสข้าวญี่ปุ่น ที่พิถีพิถันในการคัดสรรยอดอ่อนใบชาคุณภาพ 3 ใบ ก่อนเข้าสู่กระบวนการผลิตที่ได้มาตรฐานระดับโลกแห่งแรกในประเทศไทย เพื่อให้ได้มาซึ่งรสชาติและคุณประโยชน์ของชาเขียวต่อร่างกายไว้ให้ดีที่สุด",
        brand: "โออิชิ",
        price: 20,
        exp: new Date(),
        mfg: new Date(),
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'มิเนเร่น้ำแร่ธรรมชาติ',
        desc: "ดื่มน้ำสะอาดอย่างมิเนเร่ น้ำแร่ธรรมชาติ 100% ที่อุดมไปด้วยแร่ธาตุหลายชนิดที่มีประโยชน์ และค่า pH 7.9 ที่ผ่านการกรองทางธรรมชาติ กระบวนการผลิตควบคุมโดยมาตรฐานของเนสท์เล่ทุกขั้นตอน เพื่อให้ได้น้ำแร่ที่สะอาด และคุณภาพดี",
        brand: "มิเนเร่",
        price: 10,
        exp: new Date(),
        mfg: new Date(),
        category_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        name: 'MIZUMIกันแดด Mizumi มิซึมิ ยูวี วอเตอร์ เซรั่ม เอสพีเอฟ 50+ พีเอ++++ 40กรัม',
        desc: "Mizumi UV Water Serum SPF50+/PA++++ 40g สนุกกับแสงแดดได้ทุกวัน กับ มิซูมิ เซรั่มกันแดด ครีมกันแดดสูตรน้ำ ที่ปราศจากสารกันแดดแบบเคมี จากมิซึมิ เนื้อสัมผัสบางเบา ไม่เหนียวเหนอะหนะ แต่ปกป้องสูงสุดจาก UVA1, UVA2 และ UVB พร้อมลดการอุดตันของผิว ครีมกันแดดสูตรน้ำ ที่ปราศจากสารกันแดดแบบเคมี 100% ช่วยปกป้องผิวจากรังสี UVA1, UVA2 และ UVB ด้วย SPF50+/PA++++ พร้อมลดโอกาศผิวถูกทำร้ายจากอนุมูลอิสระ ด้วยสาร Anti-Oxidant -SPF50+ PA++++ ปกป้องผิวจากรังสี UVA1/UVA2/UVB ต้นเหตุของความหมองคล้ำและริ้วรอยก่อนวัย -ลดโอกาศผิวถูกทำร้ายจากอนุมูลอิสระ ด้วยสาร Anti-Oxidant ประกอบไปด้วย Yuki Extract -Vitamin E ที่มีความเสถียรสูง เนื้อสัมผัลโดดเด่น เบาสบายผิว ไม่เหนียวเหนอะหนะ ไม่ทำให้หน้ามันเพิ่ม -เนื้อสัมผัสบางเบาแบบเซรั่ม คุมมัน ลดการอุดตันผิว - สำหรับใช้ทุกวันเป็นประจำ - ปราศจากน้ำมัน น้ำหอม พาราเบน แอลกอฮอล์ และสีสังเคราะห์ผลิตที่ประเทศไทย",
        brand: "MIZUMI",
        price: 690,
        exp: new Date(),
        mfg: new Date(),
        category_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        name: 'การ์นิเย่ ไมเซล่า คลีนซิ่ง วอเตอร์ อีเวน ฟอร์ เซนซิทีฟ สกิน 125 มล',
        desc: "การ์นิเย่ ไมเซล่า คลีนซิ่ง วอเตอร์ 125 มล. ผลิตภัณฑ์ทำความสะอาดผิวหน้าจากการ์นิเย่ สำหรับผิวธรรมดา-มีแนวโน้มแพ้ง่าย แต่งหน้าน้อย - ปานกลาง มีไมเซล่าเทคโนโลยี ทำหน้าที่เสมือนแม่เหล็กดูดสิ่งสกปรก เนื้อสัมผัสแบบน้ำ ไม่เหนียวเหนอะหนะและคงความชุ่มชื้น ปราศจากน้ำหอม ใช้ได้แม้ผิวบอบบาง อ่อนโยนแม้บริเวณรอบดวงตาและปาก ช่วยขจัดความมัน ลดโอกาสการเกิดสิวได้อย่างมีประสิทธิภาพ สูตรเพื่อผิวหน้าสะอาด รู้สึกสดชื่น สำหรับผิวมันและเป็นสิวเสี้ยนและสิวอุดตันง่าย",
        brand: "GARNIER",
        price: 690,
        exp: new Date(),
        mfg: new Date(),
        category_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        name: 'Core I9-13900K',
        desc: "Core I9-13900K  24 (8P+16E) Cores 32 Threads CPU Cooler NOT Included Intel UHD Graphics 770 PCIe 5.0 and 4.0",
        brand: "Intel",
        price: 26900,
        exp: new Date(),
        mfg: new Date(),
        category_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {

        id: 6,
        name: 'CORE I7-13700K',
        desc: "16 (8P+8E) Cores24 ThreadsCPU Cooler NOT IncludedIntel UHD Graphics 770PCIe 5.0 and 4.0",
        brand: "Intel",
        price: 1880,
        exp: new Date(),
        mfg: new Date(),
        category_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      }

    ]
    await queryInterface.bulkInsert('product', productList, {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product', null, {});
  }
};
