$("document").ready(function () {
    $("#gmbgajah").hide();
    $("#gajah").click(function () {
      $("#gmbgajah").show();
      // $("#gajah").audio.pause();
  
      $("<audio></audio>")
        .attr({
          src: "suara/gajah.mp3",
          volume: 0.4,
          autoplay: "autoplay",
      })
        .appendTo("body");
  
        
    });
  
    $("#gmbkelinci").hide();
    $("#kelinci").click(function () {
      $("#gmbkelinci").show();
      // $("#kelinci").hide();
  
      $("<audio></audio>")
        .attr({
          src: "suara/kelinci.mp3",
          volume: 0.4,
          autoplay: "autoplay",
        })
        .appendTo("body");
    });
  
    $("#gmbjerapah").hide();
    $("#jerapah").click(function () {
      $("#gmbjerapah").show();
      // $("#jerapah").hide();
  
      $("<audio></audio>")
        .attr({
          src: "suara/jerapah.mp3",
          volume: 0.4,
          autoplay: "autoplay",
        })
        .appendTo("body");
    });
  
    $("#gmbzebra").hide();
    $("#zebra").click(function () {
      $("#gmbzebra").show();
      // $("#zebra").hide();
  
      $("<audio></audio>")
        .attr({
          src: "suara/zebra.mp3",
          volume: 0.4,
          autoplay: "autoplay",
        })
        .appendTo("body");
    });
  
    $("#gmbharimau").hide();
    $("#harimau").click(function () {
      $("#gmbharimau").show();
      // $("#harimau").hide();
  
      $("<audio></audio>")
        .attr({
          src: "suara/harimau.mp3",
          volume: 0.4,
          autoplay: "autoplay",
        })
        .appendTo("body");
    });
  
    $("#gmbsinga").hide();
    $("#singa").click(function () {
      $("#gmbsinga").show();
      // $("#singa").hide();
  
      $("<audio></audio>")
        .attr({
          src: "suara/singa.mp3",
          volume: 0.4,
          autoplay: "autoplay",
        })
        .appendTo("body");
    });
  
    $("#gmbelang").hide();
    $("#elang").click(function () {
      $("#gmbelang").show();
      // $("#elang").hide();
  
      $("<audio></audio>")
        .attr({
          src: "suara/elang.mp3",
          volume: 0.4,
          autoplay: "autoplay",
        })
        .appendTo("body");
    });
  
    $("#gmbbuaya").hide();
    $("#buaya").click(function () {
      $("#gmbbuaya").show();
      //$("#buaya").hide();
  
      $("<audio></audio>")
        .attr({
          src: "suara/buaya.mp3",
          volume: 0.4,
          autoplay: "autoplay",
        })
        .appendTo("body");
    });
  
    $("#gmbayam").hide();
    $("#ayam").click(function () {
      $("#gmbayam").show();
      //$("#ayam").hide();
  
      $("<audio></audio>")
        .attr({
          src: "suara/ayam.mp3",
          volume: 0.4,
          autoplay: "autoplay",
        })
        .appendTo("body");
    });
    
    $("#gmbbebek").hide();
    $("#bebek").click(function () {
      $("#gmbbebek").show();
      //$("#bebek").hide();
  
      $("<audio></audio>")
        .attr({
          src: "suara/bebek.mp3",
          volume: 0.4,
          autoplay: "autoplay",
        })
        .appendTo("body");
    });
  
    $("#gmbgagak").hide();
    $("#gagak").click(function () {
      $("#gmbgagak").show();
      //$("#gagak").hide();
  
      $("<audio></audio>")
        .attr({
          src: "suara/gagak.mp3",
          volume: 0.4,
          autoplay: "autoplay",
        })
        .appendTo("body");
    });
  
    $("#gmbsimpanse").hide();
    $("#simpanse").click(function () {
      $("#gmbsimpanse").show();
      // $("#simpanse").hide();
  
      $("<audio></audio>")
        .attr({
          src: "suara/simpanse.mp3",
          volume: 0.4,
          autoplay: "autoplay",
        })
        .appendTo("body");
    });
});