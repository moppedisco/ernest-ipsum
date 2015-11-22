<?php snippet('header') ?>

  <?php if($prev = $page->prevVisible()): ?>
  <a class="link--prev" href="<?php echo $prev->url() ?>">&larr;</a>
  <?php endif ?>

  <main class="main" role="main">

    <div class="text">
      <h1><?php echo $page->title()->html() ?></h1>
      <div class="intro"><?php echo $page->intro()->html() ?></div>
      <?php echo $page->text()->kirbytext() ?>
    </div>

  </main>

  <?php if($next = $page->nextVisible()): ?>
  <a class="link--next" href="<?php echo $next->url() ?>">&rarr;</a>
  <?php endif ?>

<?php snippet('footer') ?>
