// const samplePlace = [
//     {
//       title: "Cozy Beachfront Cottage",
//       description:
//         "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//       price: 3700,
//       DiscountPercentage: 10,
//       DiscountPrice: 3330,
//       location: "Mumbai",
//       thumbnail: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
//       images: ["https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://plus.unsplash.com/premium_photo-1676321688612-4451a8721435?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D","https://media.istockphoto.com/id/165581624/photo/modern-white-living-room.jpg?s=612x612&w=0&k=20&c=tqibitsIUIJqDpSH-KfraEGnEiJ3RvTnlbr7TWguGMA="],
//       country: "United States",
//     },
//     {
//       title: "Modern Loft in Downtown",
//       description:
//         "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//       price: 4700,
//       DiscountPercentage: 12,
//       DiscountPrice: 4222,
//       thumbnail: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
//       images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", "https://plus.unsplash.com/premium_photo-1670360414903-19e5832f8bc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww","https://media.istockphoto.com/id/2155006912/photo/large-luxury-modern-bright-interiors-living-room-mockup-illustration-3d-rendering-image.jpg?s=612x612&w=0&k=20&c=WHYwQm9AtwkMxHfEzZJt-oKP0J17a8NT1OIkmRGKv-o="],
//       location: "Mumbai",
//       country: "United States",
//     },
//     {
//       title: "Mountain Retreat",
//       description:
//         "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//       price: 5000,
//       DiscountPercentage: 15,
//       DiscountPrice: 4250,
//       thumbnail: "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
//       images: ["https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", "https://plus.unsplash.com/premium_photo-1676321688630-9558e7d2be10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww","https://media.istockphoto.com/id/2155736003/photo/large-luxury-modern-bright-interiors-living-room-mockup-illustration-3d-rendering-image.jpg?s=612x612&w=0&k=20&c=saugawsMnEl6ibbLwd880eD1418YQm-mVYU1GEnJyOI="],
//       location: "Mumbai",
//       country: "United States",
//     },
//     {
//       title: "Historic Villa in Tuscany",
//       description:
//         "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//       price: 7500,
//       DiscountPercentage: 18,
//       DiscountPrice: 6150,
//       thumbnail: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
//       images: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D","https://media.istockphoto.com/id/1450242222/photo/minimal-style-modern-white-living-room-with-swimming-pool-terrace-3d-render.jpg?s=612x612&w=0&k=20&c=q33-ZmYg-l8mAZYPTcv3M4iBaGzupmX6ynrG8d5Hsas="],
//       location: "Mumbai",
//       country: "Italy",
//     },
//     {
//       title: "Secluded Treehouse Getaway",
//       description:
//         "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//       price: 4200,
//       DiscountPercentage: 12,
//       DiscountPrice: 3696,
//       thumbnail: "https://plus.unsplash.com/premium_photo-1682377521741-66b111791809?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
//       images: ["https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjByb29tfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww","https://media.istockphoto.com/id/1160337255/photo/perspective-of-modern-luxury-living-room-with-white-sofa-and-on-sea-view-background-idea-of.jpg?s=612x612&w=0&k=20&c=-CpYxXNdigkaVpZbFfkEgjob1NAP-U2QM1xhNWHD9bw="],
//       location: "Bengaluru",
//       country: "United States",
//     },
//     {
//       title: "Beachfront Paradise",
//       description:
//         "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//       price: 3500,
//       DiscountPercentage: 10,
//       DiscountPrice: 3150,
//       location: "Oregon",
//       thumbnail: "https://images.unsplash.com/photo-1595243643203-06ba168495ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbGxhfGVufDB8fDB8fHww",
//       images: ["https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1578898886615-0c4719f932dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D","https://media.istockphoto.com/id/910851042/photo/modern-interior-living-room-garden-view.jpg?s=612x612&w=0&k=20&c=NsK1RDgvi9mm4lKWC7DL5HRQ308qGJIvweze3XYND0U="],
//       location: "Bengaluru",
//       country: "Mexico",
//     },
//     {
//       title: "Rustic Cabin by the Lake",
//       description:
//         "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//       price: 4600,
//       DiscountPercentage: 15,
//       DiscountPrice: 3910,
//       thumbnail: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZpbGxhfGVufDB8fDB8fHww",
//       images: ["https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1631049035581-bec13f40dfff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1631049035182-249067d7618e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D","https://media.istockphoto.com/id/2155858968/photo/large-luxury-modern-bright-interiors-living-room-mockup-illustration-3d-rendering-image.jpg?s=612x612&w=0&k=20&c=AG9qyp3wRlvaf8U5My3uYdl5Ssje2rIFz81JAguxp-k="],
//       location: "Kolkata",
//       country: "United States",
//     },
//     {
//       title: "Luxury Penthouse with City Views",
//       description:
//         "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//       price: 3500,
//       DiscountPrice: 350,
//       DiscountPercentage: 10,
//       thumbnail: "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZpbGxhfGVufDB8fDB8fHww",
//       images: ["https://images.unsplash.com/photo-1631048730670-ff5cd0d08f15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", "https://plus.unsplash.com/premium_photo-1676320514007-b9a41f2e7266?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1631049307290-bb947b114627?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D","https://media.istockphoto.com/id/618836400/photo/white-living-room-and-the-garden.jpg?s=612x612&w=0&k=20&c=F34Xldif8nhl-gKTqTqgENniaNlY3Oa39x7be-w-_jE="],
//       location: "Kolkata",
//       country: "United States",
//     },
//     {
//       title: "Ski-In/Ski-Out Chalet",
//       description:
//         "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//       price: 4700,
//       DiscountPercentage: 12,
//       DiscountPrice: 4222,
//       thumbnail: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZpbGxhfGVufDB8fDB8fHww",
//       images: ["https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1618221823713-ca8c0e6c9992?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1609602126247-4ab7188b4aa1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D","https://media.istockphoto.com/id/2157379797/photo/modern-bright-interiors-room-with-air-conditioning-and-remote-control-illustration-3d.jpg?s=612x612&w=0&k=20&c=6qZTPtdd5cSJQa2goeh9PZsatvAEYGImwirYiji7A9g="],
//       location: "Agra",
//       country: "Switzerland",
//     },
//     {
//       title: "Safari Lodge in the Serengeti",
//       description:
//         "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//       price: 2800,
//       DiscountPercentage: 15,
//       DiscountPrice: 2380,
//       thumbnail: "https://images.unsplash.com/photo-1593714604578-d9e41b00c6c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpbGxhfGVufDB8fDB8fHww",
//       images: ["https://images.unsplash.com/photo-1631049035115-f96132761a38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", "https://plus.unsplash.com/premium_photo-1670076505419-99468d952c61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D","https://media.istockphoto.com/id/2155421696/photo/large-luxury-modern-bright-interiors-living-room-mockup-illustration-3d-rendering-image.jpg?s=612x612&w=0&k=20&c=AFOa3mEczz6Lwu3cqMDDXq6Zb0P2pYcVgVtvb_sB4do="],
//       location: "Agra",
//       country: "Tanzania",
//     },
//     {
//       title: "Historic Canal House",
//       description:
//         "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//       price: 6000,
//       DiscountPercentage: 20,
//       DiscountPrice: 4800,
//       thumbnail: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHZpbGxhfGVufDB8fDB8fHww",
//       images: ["https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1608198399988-341f712c3711?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1595161695996-f746349f4945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D","https://media.istockphoto.com/id/2156659175/photo/large-luxury-modern-bright-interiors-living-room-mockup-illustration-3d-rendering-image.jpg?s=612x612&w=0&k=20&c=eiYfH93jrCGf3u91pHs7KD9LZdUeT23lGdO0BGQvuI0="],
//       location: "Bhiwandi",
//       country: "Netherlands",
//     },
//     {
//       title: "Private Island Retreat",
//       description:
//         "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//       price: 6000,
//       DiscountPercentage: 20,
//       DiscountPrice: 4800,
//       thumbnail: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHZpbGxhfGVufDB8fDB8fHww",
//       images: ["https://images.unsplash.com/photo-1625244695851-1fc873f942bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1590490359683-658d3d23f972?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://plus.unsplash.com/premium_photo-1661926818635-3d413932f2a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D","https://media.istockphoto.com/id/1857087749/photo/modern-loft-style-living-with-garden-view-3d-render.jpg?s=612x612&w=0&k=20&c=MMAGp9ZweuKAY-0OlCncMtnAcXTzdPSsbC_Xs5sdY8A="],
//       location: "Agra",
//       country: "Fiji",
//     },
//     {
//       title: "Charming Cottage in the Cotswolds",
//       description:
//         "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//       price: 3200,
//       DiscountPercentage: 5,
//       DiscountPrice: 3040,
//       thumbnail: "https://images.unsplash.com/photo-1606788635679-6a4e2b9a7b07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk0fHx2aWxsYXxlbnwwfHwwfHx8MA%3D%3D",
//       images: ["https://images.unsplash.com/photo-1572891086295-6c1c7c476549?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1521783593447-5702b9bfd267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D","https://media.istockphoto.com/id/181712636/photo/modern-living-room.jpg?s=612x612&w=0&k=20&c=RDbLAsgEr0JkhLS1GCCnwp3n_bSB5zzCxswgEo3O_ro="],
//       location: "Chennai",
//       country: "United Kingdom",
//     },
//     {
//       title: "Historic Brownstone in Boston",
//       description:
//         "Step back in time in this elegant historic brownstone located in the heart of Boston.",
//       price: 3200,
//       DiscountPercentage: 5,
//       DiscountPrice: 3040,
//       thumbnail: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHZpbGxhfGVufDB8fDB8fHww",
//       images: ["https://images.unsplash.com/photo-1609766975297-92f28e2db184?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY2fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1588861424526-28303cffbdd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1599202937077-3f7cdc53f2e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D","https://media.istockphoto.com/id/2155754204/photo/large-luxury-modern-bright-interiors-living-room-mockup-illustration-3d-rendering-image.jpg?s=612x612&w=0&k=20&c=_0ioov8HYgSM3wlW1y2ljS5WJYzmyYXRJY5ezwKJuGY="],
//       location: "Chennai",
//       country: "United States",
//     },
//     {
//       title: "Beachfront Bungalow in Bali",
//       description:
//         "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
//       price: 3200,
//       DiscountPercentage: 5,
//       DiscountPrice: 3040,
//       thumbnail: "https://plus.unsplash.com/premium_photo-1675745329378-5573c360f69f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHZpbGxhfGVufDB8fDB8fHww",
//       images: ["https://images.unsplash.com/photo-1631049035260-64d09b5d6912?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgzfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1631049307305-1ceea96fb0e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1560067174-e553b3647603?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D","https://media.istockphoto.com/id/2155069715/photo/large-luxury-modern-bright-interiors-living-room-mockup-illustration-3d-rendering-image.jpg?s=612x612&w=0&k=20&c=M9xFCy-kKwwKZur8Tlhsc5yOO0X7XJb3qWk8X2wnsYM="],
//       location: "Chennai",
//       country: "Indonesia",
//     },
//     {
//       title: "Mountain View Cabin in Banff",
//       description:
//         "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
//       price: 3200,
//       DiscountPercentage: 5,
//       DiscountPrice: 3040,
//       thumbnail: "https://images.unsplash.com/photo-1613977257421-010b50211cd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHZpbGxhfGVufDB8fDB8fHww",
//       images: ["https://images.unsplash.com/flagged/photo-1556438758-1d61c8c65409?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE4fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1631048835236-a1c27baeff2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE5fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1619292585355-ab0e3fd509fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE0fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D","https://media.istockphoto.com/id/935963600/photo/modern-living-room-design-and-cozy-living-style-white-sofa-with-wooden-tv-cabinet-on-concrete.jpg?s=612x612&w=0&k=20&c=kIXWJVcO9YkwvZb8ERbZsO07bhdHnGDHrRb12XlfKkQ="],
//       location: "Pune",
//       country: "Canada",
//     },
//     {
//       title: "Art Deco Apartment in Miami",
//       description:
//         "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
//       price: 4000,
//       DiscountPercentage: 8,
//       DiscountPrice: 3680,
//       thumbnail: "https://images.unsplash.com/photo-1607567618395-62fc2d132c3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHZpbGxhfGVufDB8fDB8fHww",
//       images: ["https://images.unsplash.com/photo-1505692433770-36f19f51681d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI4fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1600488999129-e49662f4020c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM2fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1609949279531-cf48d64bed89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQwfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D","https://media.istockphoto.com/id/184097531/photo/luxury-interior.jpg?s=612x612&w=0&k=20&c=-606H9_gL3yHe-Rna9CefUgQ8eBA9t_Td2ZieIiedkI="],
//       location: "Pune",
//       country: "United States",
//     },
//     {
//       title: "Tropical Villa in Phuket",
//       description:
//         "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
//       price: 4500,
//       DiscountPercentage: 10,
//       DiscountPrice: 4050,
//       thumbnail: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHZpbGxhfGVufDB8fDB8fHww",
//       images: ["https://plus.unsplash.com/premium_photo-1661875135365-16aab794632f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ5fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1613618889093-85d5cf734f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUwfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1613618889093-85d5cf734f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUwfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D","https://media.istockphoto.com/id/1200571129/photo/white-living-room-and-dining-room-corner.jpg?s=612x612&w=0&k=20&c=GrMFXvIGdcn4-fP_OyXZ6JH0M9MxLFHn6byt6ddNL_0="],
//       location: "Pune",
//       country: "Thailand",
//     },
//     {
//       title: "Historic Castle in Scotland",
//       description:
//         "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
//       price: 4500,
//       DiscountPercentage: 10,
//       DiscountPrice: 4050,
//       thumbnail: "https://images.unsplash.com/photo-1583765748076-cac46b8c98c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHZpbGxhfGVufDB8fDB8fHww",
//       images: ["https://plus.unsplash.com/premium_photo-1661877303180-19a028c21048?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjYxfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1631048835388-46642de1582e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzAyfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1631049307567-d20d6d97f64a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE0fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D","https://media.istockphoto.com/id/1255641878/photo/modern-sofa-plant-and-shelf-near-the-old-white-wall-3d-illustration.jpg?s=612x612&w=0&k=20&c=mj99sg7sqKxsGDNDEEX0Y3g6dORkSAKGxFEu83gc078="],
//       location: "Hyderabad",
//       country: "United Kingdom",
//     },
//     {
//       title: "Desert Oasis in Dubai",
//       description:
//         "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
//       price: 5000,
//       DiscountPercentage: 10,
//       DiscountPrice: 4500,
//       thumbnail: "https://images.unsplash.com/photo-1596178067639-5c6e68aea6dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHZpbGxhfGVufDB8fDB8fHww",
//       images: ["https://plus.unsplash.com/premium_photo-1661962688308-2b00b88b9765?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE3fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1565329921943-7e537b7a2ea9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzI2fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1551965931-45863f848ed5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzM4fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D","https://media.istockphoto.com/id/1397416217/photo/living-room-interior-with-chair-and-couch-shelf-and-panoramic-window.jpg?s=612x612&w=0&k=20&c=32_DXKQSlFJjWhC2ZD8J8HKsnh3WLjU6ItplkygZGnA="],
//       location: "Hyderabad",
//       country: "United Arab Emirates",
//     },
//     {
//       title: "Rustic Log Cabin in Montana",
//       description:
//         "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
  
//       price: 8000,
//       DiscountPercentage: 15,
//       DiscountPrice: 6800,
//       thumbnail: "https://images.unsplash.com/photo-1600607688960-e095ff83135c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHZpbGxhfGVufDB8fDB8fHww",
//       images: ["https://images.unsplash.com/photo-1630994347131-96d17ec41ba2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzQ0fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://plus.unsplash.com/premium_photo-1682094031102-45e46cbbbf90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzY5fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzc4fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D","https://media.istockphoto.com/id/531359333/photo/contemporary-living-room-loft-interior.jpg?s=612x612&w=0&k=20&c=zSiF-ZO9NjPb0Lq9ffyx-OfMhWwPtUsVWjlYBO5Huk8="],
//       location: "Hyderabad",
//       country: "United States",
//     },
//     {
//       title: "Beachfront Villa in Greece",
//       description:
//         "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
//       price: 7000,
//       DiscountPercentage: 20,
//       DiscountPrice: 5600,
//       thumbnail: "https://images.unsplash.com/photo-1571635685743-db0db8e31d9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHZpbGxhfGVufDB8fDB8fHww",
//       images: ["https://images.unsplash.com/photo-1567552379232-c32f3d41d353?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzgwfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1604328702728-d26d2062c20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzg3fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1631049035433-4409c68ca6cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzkyfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D","https://media.istockphoto.com/id/516321500/photo/interior-of-modern-design-loft-with-palm-3d-rendering.jpg?s=612x612&w=0&k=20&c=uhZZxfXb1JnKYJEfcIxFI0CoqtVDHGR90t36y17WbUI="],
//       location: "GOV",
//       country: "Greece",
//     },
//     {
//       title: "Eco-Friendly Treehouse Retreat",
//       description:
//         "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
  
//       price: 3500,
//       DiscountPercentage: 10,
//       DiscountPrice: 3150,
//       thumbnail: "https://images.unsplash.com/flagged/photo-1556438758-8be0c4afe990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHZpbGxhfGVufDB8fDB8fHww",
//       images: ["https://images.unsplash.com/photo-1581209394869-a7d5bbbd1945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDAwfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDAyfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1631048834912-2cc32442873c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDAxfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://media.istockphoto.com/id/1063241070/photo/modern-living-room-interior-with-nature-view-3d-render.webp?b=1&s=170667a&w=0&k=20&c=BmgAdDyxd6qcxE1fgflwdT0Ca2qRxfzto028ac4W644=","https://media.istockphoto.com/id/500486986/photo/modern-living-room.jpg?s=612x612&w=0&k=20&c=6L53sF3VfbXowd8IgwH9BNsKEAUyivIW6jw0Zk0t39g="],
//       location: "Gov",
//       country: "Costa Rica",
//     },
//     {
//       title: "Historic Cottage in Charleston",
//       description:
//         "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
  
//       price: 4700,
//       DiscountPercentage: 12,
//       DiscountPrice: 4136,
//       thumbnail: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fHZpbGxhfGVufDB8fDB8fHww",
//       images: ["https://images.unsplash.com/photo-1599619351208-3e6c839d6828?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDMzfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1438954936179-786078772609?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDM2fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1493666835815-de6b83927e24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDQxfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D","https://media.istockphoto.com/id/1279480167/photo/stylish-living-room-interior-with-comfortable-sofa-wooden-floor-and-curtain-3d-rendering.jpg?s=612x612&w=0&k=20&c=HyRYgaQXrzVN7zfof6enas7tVITRQMNVuepBOUL2pTM="],
//       location: "New Delhi",
//       country: "United States",
//     },
//     {
//       title: "Modern Apartment in Tokyo",
//       description:
//         "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
  
//       price: 4000,
//       DiscountPercentage: 10,
//       DiscountPrice: 3600,
//       thumbnail: "https://images.unsplash.com/photo-1610127191243-db6102d0584c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHx2aWxsYXxlbnwwfHwwfHx8MA%3D%3D",
//       images: ["https://images.unsplash.com/photo-1601565415267-724db0e9fbdf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDUzfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1546551613-09c2f83e1ede?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDU1fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1636773683156-c7d66e0ef3df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDcxfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D","https://media.istockphoto.com/id/2156885441/photo/large-luxury-modern-bright-interiors-living-room-mockup-illustration-3d-rendering-image.jpg?s=612x612&w=0&k=20&c=lNjkmA-n1aSV11yw_Su18LQqFkR22z2h7EFkOVQwlRM="],
//       location: "New Delhi",
//       country: "Japan",
//     },
//     {
//       title: "Lakefront Cabin in New Hampshire",
//       description:
//         "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//       price: 3000,
//       DiscountPercentage: 8,
//       DiscountPrice: 2760,
//       thumbnail: "https://images.unsplash.com/photo-1564501049559-0b54b6f0dc1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHx2aWxsYXxlbnwwfHwwfHx8MA%3D%3D",
//       images: ["https://images.unsplash.com/photo-1529290130-4ca3753253ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDc1fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTA5fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1631049552286-45e465b28965?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTEyfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D","https://media.istockphoto.com/id/1404445107/photo/modern-living-interior.jpg?s=612x612&w=0&k=20&c=S6Pt2ENB7DA5Mj8uE33zsZQIpQj7wz1o_IcgYFnX1jg="],
//       location: "New Delhi",
//       country: "United States",
//     },
//     {
//       title: "Luxury Villa in the Maldives",
//       description:
//         "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
  
//       price: 6500,
//       DiscountPercentage: 18,
//       DiscountPrice: 5330,
//       thumbnail: "https://images.unsplash.com/photo-1622632984392-bfc18e38a38d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHx2aWxsYXxlbnwwfHwwfHx8MA%3D%3D",
//       images: ["https://images.unsplash.com/photo-1631049035293-745416a778d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTE3fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1631049421978-ba025ff66fd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTI0fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1654064550874-3c14a961730e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTYwfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D","https://media.istockphoto.com/id/1338722275/photo/panoramic-white-and-beige-living-room-with-dining-area-corner-view.jpg?s=612x612&w=0&k=20&c=VGTdNgXa35HwrU2NhzIjl2rCrqRZszQx8kUl1eYjxvA="],
//       location: "Varanasi",
//       country: "Maldives",
//     },
//     {
//       title: "Ski Chalet in Aspen",
//       description:
//         "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//       price: 3800,
//       DiscountPercentage: 10,
//       DiscountPrice: 3420,
//       thumbnail: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIwfHx2aWxsYXxlbnwwfHwwfHx8MA%3D%3D",
//       images: ["https://images.unsplash.com/photo-1631049035113-4a68ecf80b1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjEwfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1653974123568-b5eff6d851e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjE3fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1521783988139-89397d761dce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjIyfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D","https://media.istockphoto.com/id/1177058792/photo/panoramic-living-room-corner-with-white-sofas.jpg?s=612x612&w=0&k=20&c=_GOC6Nww_GyjCvinm9DzrFk_b4b6Lb0qvs3VLH8dqtU="],
//       location: "Varanasi",
//       country: "United States",
//     },
    // {
    //   title: "Secluded Beach House in Costa Rica",
    //   description:
    //     "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    //   price: 4600,
    //   DiscountPercentage: 15,
    //   DiscountPrice: 3910,
    //   thumbnail: "https://images.unsplash.com/photo-1581974206939-b42731ea9dc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQwfHx2aWxsYXxlbnwwfHwwfHx8MA%3D%3D",
    //   images: ["https://images.unsplash.com/photo-1468912637438-582f3f543cba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjIzfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1554861148-982401c111fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjMwfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1631049035634-c04c637651b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjM4fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D","https://media.istockphoto.com/id/492425944/photo/modern-living-room-interior-design.jpg?s=612x612&w=0&k=20&c=cZ9faVpy49tps341EsFyf3KgysW6o43iVOp9xn8qhIw="],
    //   location: "Varanasi",
    //   country: "Costa Rica",
    // },
//     {
//       title: "Secluded Beach House in Costa Rica",
//       description:
//         "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
  
//       price: 2500,
//       DiscountPercentage: 5,
//       DiscountPrice: 2375,
//       thumbnail: "https://plus.unsplash.com/premium_photo-1675745329659-29044cb6adbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjg1fHx2aWxsYXxlbnwwfHwwfHx8MA%3D%3D",
//       images: ["https://images.unsplash.com/photo-1595599512948-b9831e5fc11c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjQzfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1631049307421-2ee48a375aca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjU0fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1652161854125-1f5289c13eac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjYwfHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D","https://media.istockphoto.com/id/1448220466/photo/3d-rendering-beige-sofa-in-living-room-interior-design.jpg?s=612x612&w=0&k=20&c=4s_ZUCk5VZA3eXhCg1sai3wx74Os3PYrc2zcDehKAyo="],
//       location: "Bhiwandi",
//       country: "Costa Rica",
//     },
//   ];
  
  
//   export default samplePlace
  

const products = [
  {
      title: "Secluded Beach House in Costa Rica",
      description:
        "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
      price: 4600,
      DiscountPercentage: 10,
      DiscountPrice: 4140,
      thumbnail: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
      images: ["https://media.istockphoto.com/id/1349844002/photo/cozy-lake-house-living-room-with-lake-view.webp?b=1&s=170667a&w=0&k=20&c=C2avnMRDyD8BNkLfKg4pFSvhmtJppuebOC_SGLhT0Cg=","https://media.istockphoto.com/id/187107633/photo/bedroom-modern-interior.jpg?s=612x612&w=0&k=20&c=mL12DlkLUZ_PIlmtYvtDRFMS4EiuUSuabUhKnEpG1_M=","https://images.unsplash.com/photo-1631049035634-c04c637651b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjM4fHxob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D","https://media.istockphoto.com/id/492425944/photo/modern-living-room-interior-design.jpg?s=612x612&w=0&k=20&c=cZ9faVpy49tps341EsFyf3KgysW6o43iVOp9xn8qhIw="],
      location: "Varanasi",
      country: "Costa Rica",
    },
];


export default products