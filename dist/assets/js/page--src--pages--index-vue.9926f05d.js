(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{224:function(e,t,i){"use strict";i.r(t);var a=i(112),o=i(86),r={components:{PlusIcon:a.a},name:"Movie",props:["price","title","year","released","image","genre"],data:function(){return{message:"Try change me!",adding:!1}},methods:{addToCart:function(){if(!this.adding){var e=this;e.adding=!0,Object(o.setTimeout)(function(){e.$emit("add-to-cart",{title:e.title,price:e.price,image:e.image,released:e.released}),e.adding=!1},1e3)}}}},s=i(42),n={data:function(){return{cart:{}}},metaInfo:{title:"Catalogue"},components:{Movie:Object(s.a)(r,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"card"},[e.released?e._e():i("p",{staticClass:"card-label"},[e._v("Coming soon")]),i("g-image",{attrs:{alt:e.title+" Poster",src:e.image}}),i("div",{staticClass:"card-info"},[i("h2",[e._v(e._s(e.title))]),i("p",[e._v("$"+e._s(e.price)+" • "+e._s(e.year)+" • "+e._s(e.genre))]),i("div",{staticClass:"card-actions"},[i("button",{staticClass:"primary-button",class:{adding:e.adding},on:{click:e.addToCart}},[e.adding?e._e():i("p",[i("PlusIcon"),e._v(" Add to cart")],1),e.adding?i("p",[e._v("Adding...")]):e._e()])])])],1)},[],!1,null,null,null).exports},methods:{addToCart:function(e){this.cart[e.title]?this.$toasted.error(e.title+" has already been added to your cart",{theme:"bubble",position:"top-right",duration:3e3}):(this.$set(this.cart,e.title,e),this.$toasted.success(e.title+" has been added to your cart",{theme:"bubble",position:"top-right",duration:3e3}))},removeItem:function(e){this.$delete(this.cart,e),this.$toasted.success(e+" has been removed from your cart",{theme:"bubble",position:"top-right",duration:3e3})}},created:function(){this.movies=[{title:"Aladdin",price:25.99,year:2019,released:!0,genre:"Action",image:"https://cdn3.movieweb.com/i/movie/EQe6vhaL6aTs28sa1ftJb5h20G09Ei/304:50/Aladdin.jpg"},{title:"Annabelle Comes Home",price:15.99,year:2019,released:!1,genre:"Horror",image:"https://cdn3.movieweb.com/i/movie/eCLfLIYzXjJRLbyeEVIxgR7IqCcSHI/304:50/Annabelle-Comes-Home.jpg"},{title:"Arrival",price:16.99,year:2016,released:!0,genre:"Drama",image:"https://cdn3.movieweb.com/i/movie/clquXpvMKVcic1FwpAoZLYpSxt7Pgd/384:50/Arrival.jpg"},{title:"Deadpool 2",price:11.99,year:2018,released:!0,genre:"Comedy",image:"https://cdn3.movieweb.com/i/movie/97DOpaTnrtV8OgMmFhBwlWNhEbBbre/304:50/Deadpool-2.jpg"},{title:"Joker",price:20.99,year:2019,released:!1,genre:"Action",image:"https://cdn3.movieweb.com/i/movie/Oiro1gjJCbQyRJmRHuDlIk9ZgGonde/304:50/Joker.jpg"},{title:"The Lion King",price:15.99,year:2019,released:!1,genre:"Fantasy",image:"https://cdn3.movieweb.com/i/movie/juAoW8O4A9oVYDgII5tpGiIazDz43N/304:50/The-Lion-King.jpg"},{title:"Shawshank Redemption",price:18.99,year:1994,released:!0,genre:"Drama",image:"https://goodmovieslist.com/article-images/best-drama-movies.jpg"},{title:"Venom",price:3.99,year:2018,released:!0,genre:"Action",image:"https://cdn3.movieweb.com/i/movie/7TydZhcv636GUp4WmTAzyfUTkJmh9N/304:50/Venom.jpg"},{title:"Zombieland Double Tap",price:21.99,year:2019,released:!0,genre:"Comedy",image:"https://cdn3.movieweb.com/i/movie/K1SmOyqeKnqM2Lz5YjcbqAfhOeufzD/304:50/Zombieland-Double-Tap.jpg"}]}},c=Object(s.a)(n,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("Layout",{attrs:{cart:e.cart},on:{"remove-item":e.removeItem}},[i("div",{staticClass:"intro section"},[i("div",{staticClass:"container"},[i("h1",[e._v("Explore Movies")]),i("p",[e._v("Checkout our tiny catalogue of movies")])])]),i("div",{staticClass:"section movies"},[i("div",{staticClass:"container"},[i("div",{staticClass:"content"},[i("div",{staticClass:"cards"},e._l(e.movies,function(t){return i("Movie",{key:t.title,attrs:{title:t.title,price:t.price,year:t.year,image:t.image,genre:t.genre,released:t.released},on:{"add-to-cart":e.addToCart}})}),1)])])])])},[],!1,null,null,null);t.default=c.exports}}]);