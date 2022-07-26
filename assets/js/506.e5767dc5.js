(window.webpackJsonp=window.webpackJsonp||[]).push([[506],{883:function(e,t,n){"use strict";n.r(t);var r=n(26),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"rancher集群启动失败failed-to-bring-up-etcd-plane"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rancher集群启动失败failed-to-bring-up-etcd-plane"}},[e._v("#")]),e._v(" Rancher集群启动失败Failed to bring up Etcd Plane")]),e._v(" "),n("p",[e._v("部署集群的时候提示")]),e._v(" "),n("p",[e._v("[etcd] Failed to bring up Etcd Plane: [etcd] Etcd Cluster is not healthy")]),e._v(" "),n("p",[e._v("可能是因为重复部署等多种原因")]),e._v(" "),n("h2",{attrs:{id:"解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[e._v("#")]),e._v(" 解决方案")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('docker rm -f $(sudo docker ps -aq);\ndocker volume rm $(sudo docker volume ls -q);\n\nrm -rf /etc/ceph \\\n       /etc/cni \\\n       /etc/kubernetes \\\n       /opt/cni \\\n       /opt/rke \\\n       /run/secrets/kubernetes.io \\\n       /run/calico \\\n       /run/flannel \\\n       /var/lib/calico \\\n       /var/lib/etcd \\\n       /var/lib/cni \\\n       /var/lib/kubelet \\\n       /var/lib/rancher/rke/log \\\n       /var/log/containers \\\n       /var/log/pods \\\n       /var/run/calico\n\nfor mount in $(mount | grep tmpfs | grep \'/var/lib/kubelet\' | awk \'{ print $3 }\') /var/lib/kubelet /var/lib/rancher; do umount $mount; done\n\nrm -f /var/lib/containerd/io.containerd.metadata.v1.bolt/meta.db\nsudo systemctl restart containerd\nsudo systemctl restart docker\n\nIPTABLES="/sbin/iptables"\ncat /proc/net/ip_tables_names | while read table; do\n  $IPTABLES -t $table -L -n | while read c chain rest; do\n      if test "X$c" = "XChain" ; then\n        $IPTABLES -t $table -F $chain\n      fi\n  done\n  $IPTABLES -t $table -X\ndone\n')])])]),n("h2",{attrs:{id:"参考文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[e._v("#")]),e._v(" 参考文章")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/rancher/rancher/issues/19882",target:"_blank",rel:"noopener noreferrer"}},[e._v("rancher2.2.2 [etcd] Failed to bring up Etcd Plane: [etcd] Etcd Cluster is not healthy"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);