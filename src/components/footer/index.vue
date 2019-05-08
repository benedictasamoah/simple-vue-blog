<template>
  <!-- Footer component -->
  <Row class="footer" type="flex" justify="center">
    <Col :xs="22" :sm="6" :md="4" :lg="4" class="about">
      <h2>
        <a href="http://carolina.com">Carolina.com</a>
      </h2>
      <a href="#">Follow us</a>
    </Col>
    <Col :xs="10" :sm="6" :md="3" :lg="3">
      <h3>About Us</h3>
      <a href="#" class="sub-text font-sm">About Us</a>
      <a href="#" class="sub-text font-sm">About Us</a>
      <a href="#" class="sub-text font-sm">About Us</a>
      <a href="#" class="sub-text font-sm">About Us</a>
      <a href="#" class="sub-text font-sm">About Us</a>
      <a href="#" class="sub-text font-sm">About Us</a>
    </Col>
    <Col :xs="10" :sm="6" :md="3" :lg="3">
      <h3>New Text</h3>
      <a href="#" class="sub-text font-sm">New text</a>
      <a href="#" class="sub-text font-sm">New text</a>
      <a href="#" class="sub-text font-sm">New text</a>
      <a href="#" class="sub-text font-sm">New text</a>
      <a href="#" class="sub-text font-sm">New text</a>
      <a href="#" class="sub-text font-sm">New text</a>
    </Col>
    <Col :xs="22" :sm="22" :md="8" :lg="6">
      <h3>SIGN UP NEWSLETTER</h3>
      <form class="newsletter">
        <div class="input-group">
          <input type="text" class="form-control" name="email" placeholder="Enter your email">
          <span class="input-group-btn">
            <button class="btn btn-default" type="button">SIGN UP</button>
          </span>
        </div>
      </form>
    </Col>
  </Row>
</template>
<style scoped src="./index.css" />
