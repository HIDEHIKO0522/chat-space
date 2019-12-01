FactoryBot.define do
  factory :message do
    text {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}"/public/images/9V443kTQ.jpeg.")}
    user
    group
  end
end
