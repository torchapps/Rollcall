(ns rollcall.styles
	(:require [garden.def :refer [defstylesheet defstyles]]
						[garden.units :as u :refer [px percent s]]))

(def accent "#2a6d45")
(def dark "black")
(def light "white")

(def font-family "\"SF UI Text\" sans-serif")

(defstyles base
	[:body {:background-color "pink"}])
