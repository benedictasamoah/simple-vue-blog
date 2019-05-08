<template>
  <!-- Main Container -->
  <div>
    <Row type="flex" justify="center">
      <Col :xs="24" :sm="22" :md="22" :lg="22">
        <!-- Header -->
        <Row class="header">
          <Breadcrumb>
            <BreadcrumbItem to="/">Blog</BreadcrumbItem>
            <BreadcrumbItem to="/components/breadcrumb">Yoga</BreadcrumbItem>
            <BreadcrumbItem>Living Yoga</BreadcrumbItem>
          </Breadcrumb>

          <!-- Chose to use inline styling to make it accessible to change background image dynamicaly if needed -->
          <div
            class="image"
            style="background: url(https://images.pexels.com/photos/1642883/pexels-photo-1642883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);"
          ></div>
        </Row>
        <!-- End of Header -->

        <!-- Content -->
        <Row type="flex" justify="center" class="content">
          <!-- Fixed social widget -->
          <Col :xs="23" :sm="2" :md="2" :lg="2" class="social">
            <div id="fixed-social">
              <div>
                <a href="#" class="fixed-facebook" target="_blank">
                  <Icon type="social-facebook"></Icon>
                  <span>Facebook</span>
                </a>
              </div>
              <div>
                <a href="#" class="fixed-twitter" target="_blank">
                  <Icon type="social-twitter"></Icon>
                  <span>Twitter</span>
                </a>
              </div>
              <div>
                <a href="#" class="fixed-gplus" target="_blank">
                  <Icon type="social-googleplus"></Icon>
                  <span>Google+</span>
                </a>
              </div>
              <div>
                <a href="#" class="fixed-linkedin" target="_blank">
                  <Icon type="social-linkedin"></Icon>
                  <span>LinkedIn</span>
                </a>
              </div>
              <div>
                <a href="#" class="fixed-instagrem" target="_blank">
                  <Icon type="social-instagram"></Icon>
                  <span>Instagram</span>
                </a>
              </div>
              <div>
                <a href="#" class="fixed-tumblr" target="_blank">
                  <Icon type="social-tumblr"></Icon>
                  <span>Tumblr</span>
                </a>
              </div>
            </div>
          </Col>
          <!-- End of social widget -->

          <!-- Main Content -->
          <Col :xs="23" :sm="22" :md="12" :lg="14">
            <h1>Living Yoga</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p>Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <h3>How is it to live a stress free life</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            <!-- Chose to use inline styling to make it accessible to change background image dynamicaly if needed -->
            <div
              class="image"
              style="background: url(https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1993&q=80);"
            ></div>

            <!-- Integrate Disqus Comment component -->
            <Row>
              <div class="comments">
                <vue-disqus shortname="simple-blog-4" url="http://localhost:8080"></vue-disqus>
              </div>
            </Row>
            <!-- End of Disqus comment component -->
          </Col>
          <!-- End of Main Content -->

          <!-- Other Articles -->
          <Col :xs="24" :sm="24" :md="8" :lg="6" :offset="1" class="articles">
            <h2>Other Articles</h2>
            <ul>
              <!-- Looping through available data in array -->
              <li v-for="(data, index) in display" :key="index">
                <div class="img" :style="{ 'background' : 'url(' + data.download_url + ')' }"></div>
                <span>{{ data.author }}</span>
              </li>
              <!-- End of loop -->
            </ul>

            <!-- Pagination navigation -->
            <Row class="navigation">
              <a
                @click="action('prev')"
                :style="[position === 0 ? {'display' : 'none'} : {'display' : 'block'}]"
              >
                <Icon type="chevron-left"></Icon>Prev
              </a>
              <a @click="action('next')">
                Next
                <Icon type="chevron-right"></Icon>
              </a>
            </Row>
            <!-- End of pagination navigation -->
          </Col>
          <!-- End of Other Articles -->
        </Row>
      </Col>
    </Row>
  </div>
  <!-- End of main container -->
</template>
<!-- import homepage javascript -->
<script src="./index.js"/>
<!-- import scoped css for this page -->
<style scoped src="./index.css" />
