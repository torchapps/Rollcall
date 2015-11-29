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
	[:.border-bottom {:border-bottom "1px solid #eee"}]

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
							:background-color light
							:color dark
							:height (px 64)
							:padding-left (px 8)
							:padding-right (px 8)
							:align-items "stretch"}
	 [:&.main {:background-color dark
						 :color light}]
	 [:&.accented {:background-color accent
								 :color light}]
	 [:.toolbar-item {:padding-left (px 8)
										:padding-right (px 8)
										:display "flex"
										:align-items "center"
										:cursor "pointer"}
		[:&.selected {:color accent}]]
	 [:.toolbar-icon {:width (px 44)
										:height (px 44)
										:display "inline-flex"
										:justify-content "center"
										:align-items "center"
										:border-radius (percent 50)
										:cursor "pointer"}
		[:&:hover {:background-color "rgba(0,0,0,0.2)"}]]
	 [:h1 {:margin 0
				 :font-size (px 16)
				 :text-transform "uppercase"}]]

	;; Panel
	[:.panel {:display "flex"
						:flex-direction "column"
						:background-color light}
	 [:.panel-content {:flex 1}]]


	;; Split View
	[:.split-view {:display "flex"
								 :align-items "stretch"}
	 [:.major {:flex 3}]
	 [:.minor {:flex 1}]
	 [:.view+.view {:border-left "1px solid #eee"}]]


	;; Header
	[:header {:padding-top (px 64)
						:padding-bottom (px 64)}
	 [:.member-name {:font-weight 300
									 :text-align "center"
									 :margin-top 0}]]

	;; Info group
	[:.info-group {:display "flex"
									:justify-content "center"}
		[:.info {:text-align "center"}
		 [:.value {:margin-left 0
							 :font-weight "bold"
							 :font-size (px 24)}]
		 [:&+.info {:margin-left (px 32)}]]]


	;; Sessions
	[:.sessions {:list-style "none"
							 :padding 0
							 :margin 0}
	 [:.year {:margin-bottom (px 64)}
		[:.year-header {:margin-top (px 8)}]]
	 [:.dates {:display "flex"
						 :flex-wrap "wrap"
						 :margin-top 0
						 :margin-bottom 0
						 :margin-left (px -4)
						 :margin-right (px -4)}]
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
	;; Dialog
	[:.dialog {:position "fixed"
						 :top 0
						 :left 0
						 :right 0
						 :bottom 0
						 :z-index 10
						 :opacity 1
						 :transition "opacity 0.3s"
						 :display "flex"
						 :justify-content "center"
						 :align-items "center"
						 :overflow-y "hidden"}
	 [:&.anim-hidden {:pointer-events "none"
										:opacity 0}]
	 [:&.curtained {:background-color "rgba(0,0,0,0.8)"
									:position "absolute"
									:top 0
									:left 0
									:right 0
									:bottom 0}]
	 [:.dialog-contents {:min-width (px 320)
											 :width (percent 50)
											 :height (percent 80)
											 :position "relative"
											 :transition "transform 0.3s"}
		[:&.anim-hidden {:pointer-events "none"
										 :transform "translateY(64px)"}]]]

	[:.sort-toolbar {:text-transform "uppercase"
									 :font-size (px 12)
									 :font-weight "bold"
									 :justify-content "center"
									 :border-top "1px solid #eee"}]

	[:.date-toolbar {:border-bottom "1px solid #eee"}])
