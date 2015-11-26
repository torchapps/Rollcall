(ns rollcall.styles
	(:require [garden.def :refer [defstylesheet defstyles]]
						[garden.units :as u :refer [px percent s]]))

(def accent "#BF4E30")
(def dark "#232C33")
(def light "white")

(def font-family "\"Raleway\", sans-serif")

(defstyles base
	;; Utility
	[:body {:background-color "white"
					:margin 0
					:font-family font-family
					:font-weight 300}]
	[:.spacer {:flex 1}]
	[:.hidden {:display "none"}]
	[:.padded {:padding (px 16)}]
	[:a {:color accent}]

	[:.fill {:position "absolute"
					 :top 0
					 :left 0
					 :right 0
					 :bottom 0}]
	[:.scrollable {:overflow-y "auto"
								 :overflow-x "hidden"}]

	[:.list-view {:list-style "none"
								:padding 0
								:margin 0}
	 [:li {;;:height (px 64)
				 :display "flex"
				 :padding (px 16)
				 :border-bottom "1px solid #eee"
				 :cursor "pointer"}
		[:.name {:flex 1}]
		[:&.selected {:background-color accent
									:color light}]]]

	;; Toolbar
	[:.toolbar {:display "flex"
							:background-color dark
							:color "white"
							:height (px 64)
							:padding-left (px 8)
							:padding-right (px 8)
							:align-items "center"}
	 [:.toolbar-item {:padding-left (px 8)
										:padding-right (px 8)}]
	 [:h1 {:margin 0
				 :font-size (px 16)
				 :text-transform "uppercase"}]]

	;; Panel
	[:.panel {:display "flex"
						:flex-direction "column"}
	 [:.panel-content {:flex 1}]]

	;; Split View
	[:.split-view {:display "flex"
								 :align-items "stretch"}
	 [:.major {:flex 3}]
	 [:.minor {:flex 1}]
	 [:.view+.view {:border-left "1px solid #eee"}]]

	[:header {:padding-top (px 64)
						:padding-bottom (px 64)}
	 [:h1 {:margin-top 0}]]

	[:.member-name {:font-weight 300
									:text-align "center"}]

	[:.info-group {:display "flex"
								 :justify-content "center"}
	 [:.info {:text-align "center"}
		[:.value {:margin-left 0
							:font-weight "bold"
							:font-size (px 24)}]
		[:&+.info {:margin-left (px 32)}]]]

	[:.sessions {:list-style "none"
							 :padding 0
							 :margin 0}
	 [:.year {:margin-bottom (px 64)}
		[:.year-header {:margin-top (px 8)}]]
	 [:.dates {:display "flex"
						 :flex-wrap "wrap"}]
	 [:.date {:width (px 64)
						:height (px 64)
						:font-size (px 10)
						:font-weight "bold"
						:text-transform "uppercase"
						:margin (px 1)
						:padding (px 4)
						:box-sizing "border-box"
						:color "#ccc"}]
	 [:.present {:background-color accent
							 :color light}]]
	;; dialog
	[:.dialog {:position "fixed"
						 :top 0
						 :left 0
						 :right 0
						 :bottom 0
						 :z-index 10
						 :opacity 1
						 :transition "opacity 0.3s"}
	 [:&.anim-hidden {:pointer-events "none"
										:opacity 0}]]
	[:.curtain {:background-color "rgba(0,0,0,0.8)"
							:position "absolute"
							:top 0
							:left 0
							:right 0
							:bottom 0}])
