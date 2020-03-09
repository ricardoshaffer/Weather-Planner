$(parkTitle).attr("class", "modal-button");
$(parkTitle).on("click", function(event) {
    event.preventDefault();
            document.createElement("div").attr("class", "modal");
            parkName = parkTitle;
            document.createElement("p").attr("class","modal-card-title");
            $(".modal-card-title").text(parkName);
            document.createElement("section").attr("class", "modal-card-body");
          }

<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>