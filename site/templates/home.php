<?php snippet('header') ?>

  <div id="pjax-container">
    <div class="intro--hero">
      <div class="intro--hero__inner">
        <?php echo $page->text()->kirbytext() ?>
      </div>
    </div>

    <main class="main" role="main">

      <?php snippet('ernests') ?>

    </main>
  </div>

<?php snippet('footer') ?>
