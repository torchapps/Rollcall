(set-env!
 :dependencies '[[adzerk/boot-cljs          "1.7.170-3"]
								 [adzerk/boot-cljs-repl   "0.3.0"] ;; latest release
								 [com.cemerick/piggieback "0.2.1"  :scope "test"]
								 [weasel                  "0.7.0"  :scope "test"]
								 [org.clojure/tools.nrepl "0.2.12" :scope "test"]
								 [adzerk/boot-reload        "0.4.2"]
								 [hoplon/boot-hoplon        "0.1.10"]
								 [hoplon/hoplon             "6.0.0-alpha11"]
								 [org.clojure/clojure       "1.7.0"]
								 [org.clojure/clojurescript "1.7.170"]
								 [tailrecursion/boot-jetty  "0.1.0"]
								 [com.andrewmcveigh/cljs-time "0.3.14"]
								 [jeluard/boot-notify "0.2.0" :scope "test"]
								 [cljsjs/papaparse "4.1.1-1"]
								 [garden "1.3.0-SNAPSHOT"]]
 :source-paths #{"src/hl" "src/garden" "src/tasks" "src/cljs"}
 :asset-paths  #{"assets" "data"})

(require
 '[adzerk.boot-cljs         :refer [cljs]]
 '[adzerk.boot-reload       :refer [reload]]
 '[hoplon.boot-hoplon       :refer [hoplon prerender]]
 '[tailrecursion.boot-jetty :refer [serve]]
 '[rollcall.boot-garden :refer [garden]]
 '[jeluard.boot-notify :refer [notify]]
 '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]])

(deftask dev
	"Build rollcall for local development."
	[]
	(comp
	 (watch)
	 (speak)
	 (notify)
	 (hoplon)
	 (reload)
	 (cljs-repl)
	 (cljs)
	 (garden :styles-var 'rollcall.styles/base
					 :output-to "css/main.css"
					 :vendors ["webkit" "moz"]
					 :auto-prefix [:transition
												 :transition-duration
												 :transition-property
												 :transform
												 :align-items
												 :justify-content
												 :flex-direction
												 :flex
												 :user-select])
	 (serve :port 8000)))

(deftask prod
	"Build rollcall for production deployment."
	[]
	(comp
	 (hoplon)
	 (cljs :optimizations :advanced)
	 (prerender)))
