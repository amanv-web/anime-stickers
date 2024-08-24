import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Demon Slayer  Sticker",
      price: 4,
      image:
        "https://www.stickitup.xyz/cdn/shop/files/2_bd7abcea-524d-43f3-a6c7-8bddc35b6af4.jpg?v=1687352574&width=493",
      img1: "https://www.stickitup.xyz/cdn/shop/files/2_bd7abcea-524d-43f3-a6c7-8bddc35b6af4.jpg?v=1687352574&width=493",
      img2: "https://www.stickitup.xyz/cdn/shop/files/3_bafae6b4-7557-4e28-85dc-9e051914ae15.jpg?v=1687352577&width=493",
      img3: "https://www.stickitup.xyz/cdn/shop/files/4_b45f21e8-df25-4631-8a81-a7d2752b6074.jpg?v=1687352579&width=493",
      img4: "https://www.stickitup.xyz/cdn/shop/files/5_ff6f2dd2-7ff1-4888-a701-012c7edd6695.jpg?v=1687352582&width=493",
      img5: "https://www.stickitup.xyz/cdn/shop/files/2_1ff78ccf-0c37-4a15-82b3-1dcbd03952de.jpg?v=1719670398&width=493",
      img6: "https://www.stickitup.xyz/cdn/shop/files/1_23cbb592-9b2f-4d6d-8810-a1ad6876aac9.jpg?v=1719670398&width=493",
      description:
        "Show your allegiance to the Uchiha clan with this high-quality sticker. Perfect for laptops, water bottles, and more. Durable and long-lasting design.",
    },
    {
      id: 2,
      name: "Call Me Gojo Sensei Sticker",
      price: 5,
      image:
        "https://www.stickitup.xyz/cdn/shop/products/BACKGROUND-1_c2599e5c-5c0a-4640-9132-3453061ee3dd.jpg?v=1684984657&width=493",
      img1: "https://www.stickitup.xyz/cdn/shop/products/BACKGROUND-1_c2599e5c-5c0a-4640-9132-3453061ee3dd.jpg?v=1684984657&width=493",
      img2: "https://www.stickitup.xyz/cdn/shop/products/BACKGROUND-2_d319cab9-9c00-40c1-9ed1-f4ab93419407.jpg?v=1684984661&width=493",
      img3: "https://www.stickitup.xyz/cdn/shop/products/BACKGROUND-3_42f2ab1e-f6f3-4747-9333-7f54e90c0925.jpg?v=1684984664&width=493",
      img4: "https://www.stickitup.xyz/cdn/shop/products/BACKGROUND-4_73607f13-2b20-418f-80dd-2078feb499f0.jpg?v=1684984666&width=493",
      img5: "https://www.stickitup.xyz/cdn/shop/files/2_52a6f744-e168-4856-87fc-9b5c95007598.jpg?v=1719673818&width=493",
      img6: "https://www.stickitup.xyz/cdn/shop/files/1_23cbb592-9b2f-4d6d-8810-a1ad6876aac9.jpg?v=1719670398&width=493",
      description:
        "Embrace your inner sorcerer with this Gojo Sensei sticker. A must-have for fans of Jujutsu Kaisen. Stick it anywhere for instant style.",
    },
    {
      id: 3,
      name: "Hokage for President Sticker",
      price: 6,
      image:
        "https://www.stickitup.xyz/cdn/shop/products/Hokage-for-president-2.jpg?v=1684986046&width=493",
      img1: "https://www.stickitup.xyz/cdn/shop/products/Hokage-for-president-2.jpg?v=1684986046&width=493",
      img2: "https://www.stickitup.xyz/cdn/shop/products/Hokage-for-president-4.jpg?v=1684986053&width=493",
      img3: "https://www.stickitup.xyz/cdn/shop/products/1wIAlId8qSP8K1d6BKoYyqNV-azKecsNc.jpg?v=1654188645&width=493",
      img4: "https://www.stickitup.xyz/cdn/shop/products/Hokage-for-president-5.jpg?v=1684986056&width=493",
      img5: "https://www.stickitup.xyz/cdn/shop/files/2_52a6f744-e168-4856-87fc-9b5c95007598.jpg?v=1719673818&width=493",
      img6: "https://www.stickitup.xyz/cdn/shop/files/1_23cbb592-9b2f-4d6d-8810-a1ad6876aac9.jpg?v=1719670398&width=493",
      description:
        "Declare your support for the strongest ninja with this Hokage for President sticker. Ideal for any Naruto fan. Add it to your collection today!",
    },
    {
      id: 4,
      name: "Zoro Sticker",
      price: 4,
      image:
        "https://www.stickitup.xyz/cdn/shop/products/zoro-1.jpg?v=1684986006&width=493",
      img1: "https://www.stickitup.xyz/cdn/shop/products/zoro-1.jpg?v=1684986006&width=493",
      img2: "https://www.stickitup.xyz/cdn/shop/products/zoro-2.jpg?v=1684986009&width=493",
      img3: "https://www.stickitup.xyz/cdn/shop/products/zoro-3.jpg?v=1684986011&width=493",
      img4: "https://www.stickitup.xyz/cdn/shop/products/zoro-4.jpg?v=1684986013&width=493",
      img5: "https://www.stickitup.xyz/cdn/shop/files/2_1ff78ccf-0c37-4a15-82b3-1dcbd03952de.jpg?v=1719670398&width=493",
      img6: "https://www.stickitup.xyz/cdn/shop/files/1_23cbb592-9b2f-4d6d-8810-a1ad6876aac9.jpg?v=1719670398&width=493",
      description:
        "Show your admiration for the sword master Zoro with this epic sticker. A perfect fit for any One Piece enthusiast. Stick it on and stay inspired.",
    },
    {
      id: 5,
      name: "Nezuko Chan sticker",
      price: 5,
      image:
        "https://www.stickitup.xyz/cdn/shop/products/1RwVnlYYAa7mMoX-P3fMlKrRlltjWT0Or.jpg?v=1684983313&width=493",
      img1: "https://www.stickitup.xyz/cdn/shop/products/1RwVnlYYAa7mMoX-P3fMlKrRlltjWT0Or.jpg?v=1684983313&width=493",
      img2: "https://www.stickitup.xyz/cdn/shop/products/13cJMt-rCPQJ1LQ8qi8AU1BVuiZyK1sEr.jpg?v=1684983315&width=493",
      img3: "https://www.stickitup.xyz/cdn/shop/products/1RKeXISBZkT_VNwhBqrsxvPptQCvlc6Gj.jpg?v=1684983318&width=493",
      img4: "https://www.stickitup.xyz/cdn/shop/products/1WrDg1mo8MEu1aYr6ojaRFWYG7SeUvTi4.jpg?v=1684983320&width=493",
      img5: "https://www.stickitup.xyz/cdn/shop/files/2_1ff78ccf-0c37-4a15-82b3-1dcbd03952de.jpg?v=1719670398&width=493",
      img6: "https://www.stickitup.xyz/cdn/shop/files/1_23cbb592-9b2f-4d6d-8810-a1ad6876aac9.jpg?v=1719670398&width=493",
      description:
        "Carry Nezuko's charm with you everywhere with this cute sticker. Perfect for fans of Demon Slayer. Add a touch of sweetness to your collection.",
    },
    {
      id: 6,
      image:
        "https://www.stickitup.xyz/cdn/shop/products/1_f553b060-c121-4cd8-9021-f451a552c548.jpg?v=1684984672&width=493",
      name: "Change World Sip By Sip",
      price: 3,
      img1: "https://www.stickitup.xyz/cdn/shop/products/1_f553b060-c121-4cd8-9021-f451a552c548.jpg?v=1684984672&width=493",
      img2: "https://www.stickitup.xyz/cdn/shop/products/3_e2044867-44d0-41a2-9cad-af60e3326080.jpg?v=1684984677&width=493",
      img3: "https://www.stickitup.xyz/cdn/shop/products/4_566470dd-595a-4527-bcef-a6471d6173a1.jpg?v=1684984679&width=493",
      img4: "https://www.stickitup.xyz/cdn/shop/products/5_df6c866e-86c1-476d-8be2-8bdf6eb5a291.jpg?v=1684984682&width=493",
      img5: "https://www.stickitup.xyz/cdn/shop/files/2_52a6f744-e168-4856-87fc-9b5c95007598.jpg?v=1719673818&width=493",
      img6: "https://www.stickitup.xyz/cdn/shop/files/1_23cbb592-9b2f-4d6d-8810-a1ad6876aac9.jpg?v=1719670398&width=493",
      description:
        "Enjoy your favorite drink with this inspiring sticker. Perfect for any coffee or tea lover. Bring a touch of positivity to your day.",
    },
    {
      id: 7,
      image:
        "https://www.stickitup.xyz/cdn/shop/products/1pt3P1rn98-hiuzFB6OCzl_Y6exmuFEms.jpg?v=1654188642&width=493",
      name: "Shoto Todoroki sticker",
      price: 5,
      img1: "https://www.stickitup.xyz/cdn/shop/products/1pt3P1rn98-hiuzFB6OCzl_Y6exmuFEms.jpg?v=1654188642&width=493",
      img2: "https://www.stickitup.xyz/cdn/shop/products/1ZNmCnJNEh0L6eeGpr96kzOS4V9kjHB2.jpg?v=1654188644&width=493",
      img3: "https://www.stickitup.xyz/cdn/shop/products/1wIAlId8qSP8K1d6BKoYyqNV-azKecsNc.jpg?v=1654188645&width=493",
      img4: "https://www.stickitup.xyz/cdn/shop/products/1IgxkdBMBDwGQRcoCBN_KgVuWAFHJ-6Da.jpg?v=1654188647&width=493",
      img5: "https://www.stickitup.xyz/cdn/shop/files/2_52a6f744-e168-4856-87fc-9b5c95007598.jpg?v=1719673818&width=493",
      img6: "https://www.stickitup.xyz/cdn/shop/files/1_23cbb592-9b2f-4d6d-8810-a1ad6876aac9.jpg?v=1719670398&width=493",
      description:
        "Show your love for Shoto Todoroki with this dynamic sticker. Great for any My Hero Academia fan. Add a cool touch to your collection.",
    },
    {
      id: 8,
      name: "Shin-chan Nohara Sticker",
      price: 4,
      image:
        "https://www.stickitup.xyz/cdn/shop/products/BACKGROUND-1_010a7286-07d8-4af1-a864-7d311650c8f1.jpg?v=1654188630&width=493",
      img1: "https://www.stickitup.xyz/cdn/shop/products/BACKGROUND-1_010a7286-07d8-4af1-a864-7d311650c8f1.jpg?v=1654188630&width=493",
      img2: "https://www.stickitup.xyz/cdn/shop/products/BACKGROUND-2_6442a558-01dc-4813-87c0-797379d2e906.jpg?v=1654188632&width=493",
      img3: "https://www.stickitup.xyz/cdn/shop/products/BACKGROUND-3_b3fab008-475c-4471-bbcc-1940b2c53420.jpg?v=1654188634&width=493",
      img4: "https://www.stickitup.xyz/cdn/shop/products/BACKGROUND-4_84354d1a-466a-40f5-bbe5-56930de9a24b.jpg?v=1654188636&width=493",
      img5: "https://www.stickitup.xyz/cdn/shop/files/2_1ff78ccf-0c37-4a15-82b3-1dcbd03952de.jpg?v=1719670398&width=493",
      img6: "https://www.stickitup.xyz/cdn/shop/files/1_23cbb592-9b2f-4d6d-8810-a1ad6876aac9.jpg?v=1719670398&width=493",
      description:
        "Add a playful vibe to your collection with this Shin-chan sticker. Perfect for fans of the cheeky cartoon character. Brighten up any surface with his antics.",
    },
    {
      id: 9,
      image:
        "https://www.stickitup.xyz/cdn/shop/files/2_1746fe98-87ac-435c-a448-b3c92ba6ff22.jpg?v=1687345766&width=493",
      name: "ITACHI UCHIHA Sticker",
      price: 3,
      img1: "https://www.stickitup.xyz/cdn/shop/files/2_1746fe98-87ac-435c-a448-b3c92ba6ff22.jpg?v=1687345766&width=493",
      img2: "https://stickitup.xyz/cdn/shop/files/3_36219bc3-1a7c-4dc1-9afe-f9a2fe8a7d5b.jpg?v=1687345766&width=493",
      img3: "https://www.stickitup.xyz/cdn/shop/files/4_15de6c3d-bbb6-4440-abf5-b710c9929b41.jpg?v=1687345766&width=493",
      img4: "https://www.stickitup.xyz/cdn/shop/files/5_0d4cfd59-5f2b-4d8a-8f7c-6f0212a4ab78.jpg?v=1687345767&width=493",
      img5: "https://www.stickitup.xyz/cdn/shop/files/2_52a6f744-e168-4856-87fc-9b5c95007598.jpg?v=1719673818&width=493",
      img6: "https://www.stickitup.xyz/cdn/shop/files/1_23cbb592-9b2f-4d6d-8810-a1ad6876aac9.jpg?v=1719670398&width=493",
      description:
        "Embrace the dark and mysterious side with this Itachi Uchiha sticker. A must-have for Naruto fans. Showcase your loyalty to the Uchiha clan.",
    },
    {
      id: 10,
      name: "Yuji Sticker",
      price: 4,
      image:
        "https://www.stickitup.xyz/cdn/shop/products/BACKGROUND-1_6d709f83-2f03-404b-8e6e-861fbd7b765c.jpg?v=1654188580&width=493",
      img1: "https://www.stickitup.xyz/cdn/shop/products/BACKGROUND-1_6d709f83-2f03-404b-8e6e-861fbd7b765c.jpg?v=1654188580&width=493",
      img2: "https://www.stickitup.xyz/cdn/shop/products/BACKGROUND-2_e346b223-8be8-4772-b05a-7fe0dc49a6ed.jpg?v=1654188582&width=493",
      img3: "https://www.stickitup.xyz/cdn/shop/products/BACKGROUND-3_b0c28e25-07f0-4d8e-9567-542ca8ef2bb0.jpg?v=1654188584&width=493",
      img4: "https://www.stickitup.xyz/cdn/shop/products/BACKGROUND-4_f7517856-d79b-417f-b9bd-2dce3f2b8220.jpg?v=1654188586&width=493",
      img5: "https://www.stickitup.xyz/cdn/shop/files/2_52a6f744-e168-4856-87fc-9b5c95007598.jpg?v=1719673818&width=493",
      img6: "https://www.stickitup.xyz/cdn/shop/files/1_23cbb592-9b2f-4d6d-8810-a1ad6876aac9.jpg?v=1719670398&width=493",
  
      description:
        "Capture the spirit of adventure with this Yuji sticker. Perfect for fans of Jujutsu Kaisen. Let your personality shine with this vibrant design.",
    },{ id: 11,
      name: "Uchiha Logo Sticker",
      price: 4,
      image:
        "https://www.stickitup.xyz/cdn/shop/products/1_d0752361-a796-4d9e-803e-5d60f16bf529.jpg?v=1684984852&width=493",
      img1: "https://www.stickitup.xyz/cdn/shop/products/2_9992b431-0376-4333-996f-459c1fc8bc3c.jpg?v=1684984854&width=493",
      img2: "https://www.stickitup.xyz/cdn/shop/products/3_f64ef6eb-df8f-489c-b948-a6d3dcffbf9f.jpg?v=1684984856&width=493",
      img3: "https://www.stickitup.xyz/cdn/shop/products/4_04c158de-589f-4ac2-9c2b-a7666335ce53.jpg?v=1684984858&width=493",
      img4: "https://www.stickitup.xyz/cdn/shop/products/5_b782e576-38ad-4e2d-8f48-d2b9c5b94173.jpg?v=1684984860&width=493",
      img5: "https://www.stickitup.xyz/cdn/shop/files/2_1ff78ccf-0c37-4a15-82b3-1dcbd03952de.jpg?v=1719670398&width=493",
      img6: "https://www.stickitup.xyz/cdn/shop/files/1_23cbb592-9b2f-4d6d-8810-a1ad6876aac9.jpg?v=1719670398&width=493",
      description:
        "Show your allegiance to the Uchiha clan with this high-quality sticker. Perfect for laptops, water bottles, and more. Durable and long-lasting design.",}
  ]);

  return (
    <AppContext.Provider value={{ items, setItems, products }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
