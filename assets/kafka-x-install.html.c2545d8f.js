import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as o,a as n,b as s,e,d as t,r as p}from"./app.2d9a29d9.js";const c={},u=e(`<h1 id="kafka-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#kafka-\u5B89\u88C5" aria-hidden="true">#</a> Kafka - \u5B89\u88C5</h1><h2 id="_1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5" aria-hidden="true">#</a> 1. \u5B89\u88C5</h2><h3 id="_1-1-docker-compose-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-1-docker-compose-\u5B89\u88C5" aria-hidden="true">#</a> 1.1 docker-compose \u5B89\u88C5</h3><h4 id="_1-1-1-docker-compose-yml-\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#_1-1-1-docker-compose-yml-\u7F16\u5199" aria-hidden="true">#</a> 1.1.1 docker-compose.yml \u7F16\u5199</h4><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">zookeeper</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&#39;bitnami/zookeeper:3.8.0&#39;</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> zookeeper
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;2181:2181&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai
      <span class="token key atrule">ALLOW_ANONYMOUS_LOGIN</span><span class="token punctuation">:</span> <span class="token string">&quot;yes&quot;</span>
      <span class="token key atrule">ZOO_SERVER_ID</span><span class="token punctuation">:</span> <span class="token number">1</span>
      <span class="token key atrule">ZOO_PORT_NUMBER</span><span class="token punctuation">:</span> <span class="token number">2181</span>
    <span class="token comment"># network_mode: &quot;host&quot;</span>

  <span class="token key atrule">kafka</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&#39;bitnami/kafka:3.2.0&#39;</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> kafka
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9092:9092&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> Asia/Shanghai
      <span class="token comment"># \u66F4\u591A\u53D8\u91CF \u67E5\u770B\u6587\u6863 https://github.com/bitnami/bitnami-docker-kafka/blob/master/README.md</span>
      <span class="token key atrule">KAFKA_BROKER_ID</span><span class="token punctuation">:</span> <span class="token number">1</span>
      <span class="token comment"># \u76D1\u542C\u7AEF\u53E3</span>
      <span class="token key atrule">KAFKA_CFG_LISTENERS</span><span class="token punctuation">:</span> PLAINTEXT<span class="token punctuation">:</span>//<span class="token punctuation">:</span><span class="token number">9092</span>
      <span class="token comment"># \u5B9E\u9645\u8BBF\u95EEip \u672C\u5730\u7528 127 \u5185\u7F51\u7528 192 \u5916\u7F51\u7528 \u5916\u7F51ip</span>
      <span class="token key atrule">KAFKA_CFG_ADVERTISED_LISTENERS</span><span class="token punctuation">:</span> PLAINTEXT<span class="token punctuation">:</span>//192.168.31.165<span class="token punctuation">:</span><span class="token number">9092</span>
      <span class="token key atrule">KAFKA_CFG_ZOOKEEPER_CONNECT</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">2181</span>
      <span class="token key atrule">ALLOW_PLAINTEXT_LISTENER</span><span class="token punctuation">:</span> <span class="token string">&quot;yes&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/bitnami/kafka/data
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> zookeeper
    <span class="token comment">#network_mode: &quot;host&quot;</span>

  <span class="token key atrule">kafka-manager</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> sheepkiller/kafka<span class="token punctuation">-</span>manager<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> kafka<span class="token punctuation">-</span>manager
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;19092:19092&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">ZK_HOSTS</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">2181</span>
      <span class="token key atrule">APPLICATION_SECRET</span><span class="token punctuation">:</span> letmein
      <span class="token key atrule">KAFKA_MANAGER_USERNAME</span><span class="token punctuation">:</span> ruoyi
      <span class="token key atrule">KAFKA_MANAGER_PASSWORD</span><span class="token punctuation">:</span> ruoyi123
      <span class="token key atrule">KM_ARGS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span>Dhttp.port=19092
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> kafka
    <span class="token comment">#network_mode: &quot;host&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1-2-\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u542F\u52A8" aria-hidden="true">#</a> 1.1.2 \u542F\u52A8</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-\u63A7\u5236\u53F0\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#_2-\u63A7\u5236\u53F0\u7BA1\u7406" aria-hidden="true">#</a> 2. \u63A7\u5236\u53F0\u7BA1\u7406</h2><h3 id="_2-1-\u8FDB\u5165\u63A7\u5236\u53F0" tabindex="-1"><a class="header-anchor" href="#_2-1-\u8FDB\u5165\u63A7\u5236\u53F0" aria-hidden="true">#</a> 2.1 \u8FDB\u5165\u63A7\u5236\u53F0</h3>`,9),r={href:"http://localhost:19092/",target:"_blank",rel:"noopener noreferrer"},d=t("http://localhost:19092/"),k=e('<p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220922133836608.png" alt="image-20220922133836608" loading="lazy"></p><h3 id="_2-2-\u521B\u5EFA\u96C6\u7FA4\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#_2-2-\u521B\u5EFA\u96C6\u7FA4\u94FE\u63A5" aria-hidden="true">#</a> 2.2 \u521B\u5EFA\u96C6\u7FA4\u94FE\u63A5</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220922133941643.png" alt="image-20220922133941643" loading="lazy"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220922134027419.png" alt="image-20220922134027419" loading="lazy"></p><h3 id="_2-3-\u6DFB\u52A0list" tabindex="-1"><a class="header-anchor" href="#_2-3-\u6DFB\u52A0list" aria-hidden="true">#</a> 2.3 \u6DFB\u52A0List</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220922134525592.png" alt="image-20220922134525592" loading="lazy"></p><h3 id="_2-4-\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#_2-4-\u67E5\u770B" aria-hidden="true">#</a> 2.4 \u67E5\u770B</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220922134557163.png" alt="image-20220922134557163" loading="lazy"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',9),m={href:"https://lionli.blog.csdn.net/article/details/125855550",target:"_blank",rel:"noopener noreferrer"},v=t("docker-compose \u5B89\u88C5 Kafka 3.X \u9644\u5E26\u53EF\u89C6\u5316\u754C\u9762");function b(h,_){const a=p("ExternalLinkIcon");return l(),o("div",null,[u,n("p",null,[n("a",r,[d,s(a)])]),k,n("p",null,[n("a",m,[v,s(a)])])])}const f=i(c,[["render",b],["__file","kafka-x-install.html.vue"]]);export{f as default};
